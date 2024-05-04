import { expect } from 'chai';

describe('Heap Tests', () => {
    it('Heap Allocating Too Much Throws Exception', () => {
        expect(() => allocateInfinitely()).to.throw(OutOfMemoryError);
    });
});

function allocateInfinitely() {
    const byteArrays: Uint8Array[] = [];

    try {
        while (true) {
            byteArrays.push(new Uint8Array(Number.MAX_SAFE_INTEGER)); // Використовуємо максимально доступну довжину масиву
        }
    } finally {
        console.log(`Total allocated: ${(performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MiB`);
    }
}
