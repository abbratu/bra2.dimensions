
import { CD3Vector } from '../src';
import { describe, test, expect } from "@jest/globals"


describe('Test 3D Vector', () => {
    let v3Vector: CD3Vector = new CD3Vector([1, 1, 1]);

    beforeEach(() => {
        v3Vector = new CD3Vector([1, 1, 1]);
    });

    afterEach(() => {
        v3Vector = new CD3Vector([1, 1, 1]);
    });

    test('Data', () => {
        v3Vector.data = [2, 2, 2];
        const result = v3Vector.data;
        expect(result).toEqual([2, 2, 2]);
    });

    test('Magnitude', () => {
        const result = v3Vector.magnitude();
        expect(result).toEqual(Math.sqrt(3));
    });

    test('Normal', () => {
        const result = v3Vector.normal();
        expect(result).toEqual([1/Math.sqrt(3), 1/Math.sqrt(3), 1/Math.sqrt(3)]);
    });

    test('Add', () => {
        const result = v3Vector.add([1, 1, 1]);
        expect(result).toEqual([2, 2, 2]);
    });

    test('Sub', () => {
        const result = v3Vector.sub([1, 1, 1]);
        expect(result).toEqual([0, 0, 0]);
    });

    test('Dot', () => {
        const result = v3Vector.dot([1, 1, 1]);
        expect(result).toEqual(3);
    });

    test('Cross', () => {
        const result = v3Vector.cross([1, 1, 1]);
        expect(result).toEqual([0, 0, 0]);
    });

    test('Scalar', () => {
        const result = v3Vector.scalar([2, 0, 0]);
        expect(result).toEqual([1, 0, 0]);
    });
})