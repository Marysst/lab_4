import { expect } from 'chai';

describe('Value Type Tests', () => {
    it('Integer Passed By Value', () => {
        let value = 10;
        increment(value);
        expect(value).to.equal(10);
    });

    it('CustomStruct Passed By Value', () => {
        let customStruct: CustomStruct = { value: 10 };
        increment(customStruct);
        expect(customStruct.value).to.equal(10);
    });
});

function increment(value: number) {
    value++;
}

interface CustomStruct {
    value: number;
}
