import { describe, test, expect } from "@jest/globals"
import { CD1Vector } from "../src";

describe('Test 1D Vector', () => {
    test('Magnitude', () => {
        expect(CD1Vector.magnitude([3])).toEqual(3);
        expect(CD1Vector.magnitude([1])).toEqual(1);
    });

    test('Normal', () => {
        expect(CD1Vector.normal([3])).toEqual([1]);
        expect(CD1Vector.normal([-3])).toEqual([-1]);
    });

    test('Add', () => {
        expect(CD1Vector.add([1], [1])).toEqual([2]);
    });

    test('Sub', () => {
        expect(CD1Vector.sub([3], [1])).toEqual([2]);
    });

    test('Dot', () => {
        expect(CD1Vector.dot([1], [1])).toEqual(1);
    });

    test('Scale', () => {
        expect(CD1Vector.scale([1], 2)).toEqual([2]);
    });

    test('DistanceTo', () => {
        expect(CD1Vector.distanceTo([1], [2])).toEqual(1);
    });

    test('Scalar', () => {
        expect(CD1Vector.scalar([1], [2])).toEqual([1]);
    });
});
