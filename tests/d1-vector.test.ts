import { CD1Vector } from '../src/d1/d1-vector.class'
import { describe, test, expect } from "@jest/globals"


describe('Test 1D Vector', () => {
    test('Magnitude', () => {
        let result = CD1Vector.magnitude([3]);
        expect(result).toEqual(3);

        result = CD1Vector.magnitude([1]);
        expect(result).toEqual(1);
    });

    test('Normal', () => {
        let result = CD1Vector.normal([3]);
        expect(result).toEqual([1]);

        result = CD1Vector.normal([-3]);
        expect(result).toEqual([-1]);
    });

    test('Add', () => {
        const result = CD1Vector.add([1], [1]);
        expect(result).toEqual([2]);
    });

    test('Sub', () => {
        const result = CD1Vector.sub([3], [1]);
        expect(result).toEqual([2]);
    });

    test('Dot', () => {
        const result = CD1Vector.dot([1], [1]);
        expect(result).toEqual(1);
    });

    test ('Scale', () => {
        const result = CD1Vector.scale([1], 2);
        expect(result).toEqual([2]);
    });

    test('DistanceTo', () => {
        const result = CD1Vector.distanceTo([1], [2]);
        expect(result).toEqual(1);
    })

    test('Scalar', () => {
        const result = CD1Vector.scalar([1], [2]);
        expect(result).toEqual([1]);
    });
})