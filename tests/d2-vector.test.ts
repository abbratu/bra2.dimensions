import { CD2Vector } from '../src';
import { describe, test, expect } from "@jest/globals"


describe('Test 2D Vector', () => {
    let v2Vector: CD2Vector = new CD2Vector([1, 1]);

    beforeEach(() => {
        v2Vector = new CD2Vector([1, 1]);
    });

    afterEach(() => {
        v2Vector = new CD2Vector([1, 1]);
    });

    test('Data', () => {
        v2Vector.data = [2, 2];
        const result = v2Vector.data;
        expect(result).toEqual([2, 2]);
    });

    test('Magnitude', () => {
        const result = v2Vector.magnitude();
        expect(result).toEqual(Math.sqrt(2));
    });

    test('Normal', () => {
        const result = v2Vector.normal();
        expect(result).toEqual([1/Math.sqrt(2), 1/Math.sqrt(2)]);
    });

    test('Add', () => {
        const result = v2Vector.add([1, 1]);
        expect(result).toEqual([2, 2]);
    });

    test('Sub', () => {
        const result = v2Vector.sub([1, 1]);
        expect(result).toEqual([0, 0]);
    });

    test('Dot', () => {
        const result = v2Vector.dot([1, 1]);
        expect(result).toEqual(2);
    });

    test('Cross', () => {
        expect(() => {
            const result = v2Vector.cross([1, 1]);
        }).toThrow(TypeError);
    });

    test('Scalar', () => {
        const result = v2Vector.scalar([2, 0]);
        expect(result).toEqual([1, 0]);
    });
})