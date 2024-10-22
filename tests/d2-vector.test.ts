import { describe, test, expect } from "@jest/globals"
import { CD2Vector, TD2Data } from "../src";
import exp from "constants";

describe('Test 2D Vector', () => {
    test('Magnitude', () => {
        expect(CD2Vector.magnitude([3, 0])).toEqual(3);
        expect(CD2Vector.magnitude([0, 3])).toEqual(3);
    });

    test('Normal', () => {
        expect(CD2Vector.normal([3, 0])).toEqual([1, 0]);
        expect(CD2Vector.normal([0, 3])).toEqual([0, 1]);
    });

    test('Add', () => {
        expect(CD2Vector.add([1, 1], [1, 1])).toEqual([2, 2]);
    });

    test('Sub', () => {
        expect(CD2Vector.sub([3, 3], [1, 1])).toEqual([2, 2]);
    });

    test('Dot', () => {
        expect(CD2Vector.dot([1, 1], [1, 1])).toEqual(2);
    });

    test('Scale', () => {
        expect(CD2Vector.scale([1, 1], 2)).toEqual([2, 2]);
    });

    test('DistanceTo', () => {
        expect(CD2Vector.distanceTo([1, 1], [2, 2])).toEqual(Math.sqrt(2));
    });

    test('Scalar', () => {
        expect(CD2Vector.scalar([1, 1], [1, 0])).toEqual([1, 0]);
    });

    test('Rotate', () => {
        const [x, y]: TD2Data = [1, 0];
        const angle = Math.PI / 2;
        const ret = CD2Vector.rotate([x, y], angle);
        expect(ret).toEqual([ x * Math.cos(angle) - y * Math.sin(angle), x * Math.sin(angle) + y * Math.cos(angle) ]);
    });

    test ('RotateWithOrigin', () => {
        const [x, y]: TD2Data = [1, 0];
        const o: TD2Data = [0, 0];
        const angle = Math.PI / 2;
        const ret = CD2Vector.rotateWithOrigin([x, y], o, angle);
        expect(ret).toEqual([ x * Math.cos(angle) - y * Math.sin(angle), x * Math.sin(angle) + y * Math.cos(angle) ]);
    });
});
