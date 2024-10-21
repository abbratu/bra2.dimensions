import { CD3Vector } from '../src'
import { describe, test, expect } from "@jest/globals"

describe('Test 3D Vector', () => {
    test('Magnitude', () => {
        let result = CD3Vector.magnitude([3, 0, 0]);
        expect(result).toEqual(3);

        result = CD3Vector.magnitude([0, 0, 3]);
        expect(result).toEqual(3);
    });

    test('Normal', () => {
        let result = CD3Vector.normal([3, 0, 0]);
        expect(result).toEqual([1, 0, 0]);

        result = CD3Vector.normal([0, 0, 3]);
        expect(result).toEqual([0, 0, 1]);
        
        result = CD3Vector.normal([1, 1, 1]);
        expect(result).toEqual([1/Math.sqrt(3), 1/Math.sqrt(3), 1/Math.sqrt(3)]);
    });

    test('Add', () => {
        const result = CD3Vector.add([1, 1, 1], [1, 1, 1]);
        expect(result).toEqual([2, 2, 2]);
    });

    test('Sub', () => {
        const result = CD3Vector.sub([3, 3, 3], [1, 1, 1]);
        expect(result).toEqual([2, 2, 2]);
    });

    test('Dot', () => {
        const result = CD3Vector.dot([1, 1, 1], [1, 1, 1]);
        expect(result).toEqual(3);
    });

    test ('Scale', () => {
        const result = CD3Vector.scale([1, 1, 1], 2);
        expect(result).toEqual([2, 2, 2]);
    });

    test('DistanceTo', () => {
        const result = CD3Vector.distanceTo([1, 1, 1], [2, 2, 2]);
        expect(result).toEqual(Math.sqrt(3));
    })

    test('Scalar', () => {
        const result = CD3Vector.scalar([1, 1, 1], [1, 0, 0]);
        expect(result).toEqual([1, 0, 0]);
    });

    test('Cross', () => {
        const result = CD3Vector.cross([1, 0, 0], [0, 1, 0]);
        expect(result).toEqual([0, 0, 1]);
    });
})