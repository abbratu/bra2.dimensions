import { CD1Vector } from '../src/d1/d1-vector.class'
import { describe, test, expect } from "@jest/globals"


describe('Test 1D Vector', () => {
    let v1Vector: CD1Vector = new CD1Vector([1]);

    beforeEach(() => {
        v1Vector = new CD1Vector([1]);
    });

    afterEach(() => {
        v1Vector = new CD1Vector([1]);
    });

    test('Data', () => {
        v1Vector.data = [2];
        const result = v1Vector.data;
        expect(result).toEqual([2]);
    });

    test('Magnitude', () => {
        const result = v1Vector.magnitude();
        expect(result).toEqual(1);
    });

    test('Normal', () => {
        const result = v1Vector.normal();
        expect(result).toEqual([1]);
    });

    test('Add', () => {
        const result = v1Vector.add([1]);
        expect(result).toEqual([2]);
    });

    test('Sub', () => {
        const result = v1Vector.sub([1]);
        expect(result).toEqual([0]);
    });

    test('Dot', () => {
        const result = v1Vector.dot([1]);
        expect(result).toEqual(1);
    });

    test('Cross', () => {
        expect(() => {
            const result = v1Vector.cross([1]);
        }).toThrow(TypeError);
    });

    test('Scalar', () => {
        const result = v1Vector.scalar([2]);
        expect(result).toEqual([1]);
    });
})