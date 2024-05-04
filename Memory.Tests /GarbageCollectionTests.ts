import { expect } from 'chai';

describe('Garbage Collection Tests', () => {
    beforeEach(() => {
        // Тут ми не робимо нічого, оскільки TypeScript/JavaScript має автоматичне керування пам'яттю.
    });

    it('Verify That Unreferenced Objects Are Collected', () => {
        const list: object[] = [];

        // Генеруємо деякі об'єкти
        for (let i = 0; i < (1 << 10); i++) {
            list.push(new Object());
        }

        const allocatedMemory = process.memoryUsage().heapUsed;

        // Видаляємо посилання на згенеровані об'єкти
        list.length = 0;

        const allocatedMemoryDiff = process.memoryUsage().heapUsed - allocatedMemory;

        // Перевіряємо, чи звільнилася деяка пам'ять
        expect(allocatedMemoryDiff).to.be.lessThan(0, "Expected to free up some memory");
    });
});
