import { CD3Vector } from '../src'
import { describe, test, expect } from "@jest/globals"

describe('Test 2D Vector', () => {
    test('Magnitude', () => {
        const result = CD3Vector.magnitude([1, 1, 1]);
        expect(result).toEqual(Math.sqrt(3));
    });
})