import { CD2Vector } from '../src/d2/d2-vector.class'
import { describe, test, expect } from "@jest/globals"

describe('Test 2D Vector', () => {
    test('Magnitude', () => {
        let result = CD2Vector.magnitude([3, 0]);
        expect(result).toEqual(3);

        result = CD2Vector.magnitude([0, 3]);
        expect(result).toEqual(3);
    });

    test('Normal', () => {
        let result = CD2Vector.normal([3, 0]);
        expect(result).toEqual([1, 0]);

        result = CD2Vector.normal([0, 3]);
        expect(result).toEqual([0, 1]);
    });

    test('Add', () => {
        const result = CD2Vector.add([1, 1], [1, 1]);
        expect(result).toEqual([2, 2]);
    });

    test('Sub', () => {
        const result = CD2Vector.sub([3, 3], [1, 1]);
        expect(result).toEqual([2, 2]);
    });

    test('Dot', () => {
        const result = CD2Vector.dot([1, 1], [1, 1]);
        expect(result).toEqual(2);
    });

    test ('Scale', () => {
        const result = CD2Vector.scale([1, 1], 2);
        expect(result).toEqual([2, 2]);
    });

    test('DistanceTo', () => {
        const result = CD2Vector.distanceTo([1, 1], [2, 2]);
        expect(result).toEqual(Math.sqrt(2));
    })

    test('Scalar', () => {
        const result = CD2Vector.scalar([1, 1], [1, 0]);
        expect(result).toEqual([1, 0]);
    });
})