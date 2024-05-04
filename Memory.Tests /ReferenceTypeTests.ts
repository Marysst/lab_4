import { expect } from 'chai';

describe('Reference Type Tests', () => {
    it('Array Passed By Reference', () => {
        const value = [1, 2, 3];
        incrementEach(value);
        expect(value).to.deep.equal([2, 3, 4]);
    });

    it('CustomClass Passed By Reference', () => {
        const customClass = new CustomClass(10);
        increment(customClass);
        expect(customClass.value).to.equal(11);
    });
});

function incrementEach(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
}

function increment(obj: CustomClass) {
    obj.value++;
}

class CustomClass {
    constructor(public value: number) {}
}
