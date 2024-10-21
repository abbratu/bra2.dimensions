import { TDimensionData } from "./dimension-data.type";

export function CVectorBaseBuilder<T extends TDimensionData>() {
    
    abstract class CVectorBase {
        
        public static magnitude(v: T): number  {
            return Math.sqrt(v.reduce((acc, cur) => acc + cur * cur, 0));
        }

        public static normal(v: T): T {
            const mag = this.magnitude(v);
            return v.map(val => val / mag) as T;
        }

        public static scale(v: T, s: number): T {
            return v.map(val => val * s) as T;
        }

        public static add(v: T, w: T): T {
            return v.map((val, idx) => val + w[idx]) as T;
        }

        public static sub(v: T, w: T): T {
            return v.map((val, idx) => val - w[idx]) as T;
        }

        public static dot(v: T, w: T): number {
            return v.reduce((acc, cur, idx) => acc + cur * w[idx], 0);
        }

        public static scalar(v: T, w: T): T {
            const mag = this.magnitude(w);
            return v.map((val, idx) => val * w[idx] / mag) as T;
        }

        public static distanceTo(v: T, w: T): number {
            return this.magnitude(this.sub(v, w));
        }

    }

    return CVectorBase;
}