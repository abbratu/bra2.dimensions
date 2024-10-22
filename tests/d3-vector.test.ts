import { describe, test, expect } from "@jest/globals"
import { CD3Vector } from "../src";

describe('Test 3D Vector', () => {
    test('Magnitude', () => {
        expect(CD3Vector.magnitude([3, 0, 0])).toEqual(3);
        expect(CD3Vector.magnitude([0, 0, 3])).toEqual(3);
    });

    test('Normal', () => {
        expect(CD3Vector.normal([3, 0, 0])).toEqual([1, 0, 0]);
        expect(CD3Vector.normal([0, 0, 3])).toEqual([0, 0, 1]);
        expect(CD3Vector.normal([1, 1, 1])).toEqual([1/Math.sqrt(3), 1/Math.sqrt(3), 1/Math.sqrt(3)]);
    });

    test('Add', () => {
        expect(CD3Vector.add([1, 1, 1], [1, 1, 1])).toEqual([2, 2, 2]);
    });

    test('Sub', () => {
        expect(CD3Vector.sub([3, 3, 3], [1, 1, 1])).toEqual([2, 2, 2]);
    });

    test('Dot', () => {
        expect(CD3Vector.dot([1, 1, 1], [1, 1, 1])).toEqual(3);
    });

    test ('Scale', () => {
        expect(CD3Vector.scale([1, 1, 1], 2)).toEqual([2, 2, 2]);
    });

    test('DistanceTo', () => {
        expect(CD3Vector.distanceTo([1, 1, 1], [2, 2, 2])).toEqual(Math.sqrt(3));
    })

    test('Scalar', () => {
        expect(CD3Vector.scalar([1, 1, 1], [1, 0, 0])).toEqual([1, 0, 0]);
    });

    test('Cross', () => {
        expect(CD3Vector.cross([1, 0, 0], [0, 1, 0])).toEqual([0, 0, 1]);
    });
})