import { expect } from 'chai';

describe('Allocation Tests', () => {
    beforeEach(() => {
        // В цьому прикладі видалення пам'яті не потрібно,
        // оскільки JavaScript використовує автоматичне управління пам'яттю.
        // Але ми все одно можемо використовувати цей блок, якщо є така потреба.
        // Цей код нічого не робить в JavaScript, але може бути корисним, якщо ви перетворюєте цей код на Node.js.

        // global.gc(); // Це команда викличе сбірник сміття в Node.js
    });

    it('Creating Array 1MB On Stack', () => {
        const allocatedMemory = process.memoryUsage().heapUsed;
        // Оскільки JavaScript не має прямого еквіваленту властивості stackalloc в C#,
        // ми будемо просто створювати буфер фіксованого розміру.
        const array = Buffer.allocUnsafe(1 << 20);
        const allocatedMemoryDiff = process.memoryUsage().heapUsed - allocatedMemory;

        // Тут ми перевіряємо, чи пам'ять була виділена на стеку, а не в купі.
        expect(allocatedMemoryDiff).to.be.lessThanOrEqual(0, "Expected to have no heap allocations");
    });

    it('Creating Array 1MB On Heap', () => {
        const allocatedMemory = process.memoryUsage().heapUsed;
        const array = Buffer.allocUnsafe(1 << 20); // Виділення пам'яті на купі.
        const allocatedMemoryDiff = process.memoryUsage().heapUsed - allocatedMemory;

        // Тут ми перевіряємо, чи виділилася пам'ять на купі і чи її розмір принаймні 1MB.
        expect(allocatedMemoryDiff).to.be.at.least(array.length, "Expected to allocate at least 1MB");
    });
});
