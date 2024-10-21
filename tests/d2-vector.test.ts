import { CD2Vector } from '../src/d2/d2-vector.class'
import { describe, test, expect } from "@jest/globals"

describe('Test 2D Vector', () => {
    test('Magnitude', () => {
        const result = CD2Vector.magnitude([1, 1]);
        expect(result).toEqual(Math.sqrt(2));
    });
})