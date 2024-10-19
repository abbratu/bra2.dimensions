import { TDimensionData } from "./dimension-data.type";

// The Vector base interface
export interface IVectorBase<D extends TDimensionData> {
    data: D;

    // vector properties
    normal(): D;
    magnitude(): number;

    // vector operations
    scale(s: number): D;
    add(v: D): D;
    sub(v: D): D;
    dot(v: D): number;
    scalar(v: D): D;
    cross(v: D): D;
}