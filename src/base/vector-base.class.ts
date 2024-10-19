import { TDimensionData } from "./dimension-data.type";
import { IVectorBase } from "./vector-base.interface";

// The Vector base class
export abstract class CVectorBase<D extends TDimensionData> implements IVectorBase<D> {
    protected _data: D;
    
    get data(): D {
        return [...this._data] as D;
    }

    set data(d: D) {
        this._data = [...d] as D;
    }

    constructor(_data: D) {
        this._data = _data;
    }

    magnitude(): number  {
        return Math.sqrt(this.data.reduce((acc, cur) => acc + cur * cur, 0));
    }

    normal(): D {
        const mag = this.magnitude();
        return this.scale(1 / mag);
    }

    scale(s: number): D {
        return this.data.map(v => v * s) as D;
    }

    add(v: D): D {
        return this.data.map((val, idx) => val + v[idx]) as D;
    }

    sub(v: D): D {
        return this.data.map((val, idx) => val - v[idx]) as D;
    }

    dot(v: D): number {
        return this.data.reduce((acc, cur, idx) => acc + cur * v[idx], 0);
    }

    scalar(v: D): D {
        const mag = Math.sqrt(v.reduce((acc, cur) => acc + cur * cur, 0));
        return this.data.map((val, idx) => val * v[idx] / mag) as D;
    }
    abstract cross(v: D): D;
}