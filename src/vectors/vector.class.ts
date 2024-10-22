import { TD1Data, TD2Data, TD3Data, TDimensionData } from "../dimensions/dimension-data.type";

function CVectorBaseBuilder<T extends TDimensionData>() {
    
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

        public static scalar(v: T, w: T): T {
            const mag = this.magnitude(w);
            return v.map((val, idx) => val * w[idx] / mag) as T;
        }

        public static distanceTo(v: T, w: T): number {
            return this.magnitude(this.sub(v, w));
        }

        public static dot(v: T, w: T): number {
            return v.reduce((acc, cur, idx) => acc + cur * w[idx], 0);
        }
    }

    return CVectorBase;
}


export class CD1Vector extends CVectorBaseBuilder<TD1Data>() {}

export class CD2Vector extends CVectorBaseBuilder<TD2Data>() {
    public static rotate( [x, y]: TD2Data, angle: number): TD2Data {
        return (((cos, sin) => [
            x * cos - y * sin,
            x * sin + y * cos
        ]))(Math.cos(angle), Math.sin(angle))
    }

    public static rotateWithOrigin(v: TD2Data, o: TD2Data, angle: number): TD2Data {
        return this.add(o, this.rotate(this.sub(v, o), angle));
    }
}

export class CD3Vector extends CVectorBaseBuilder<TD3Data>() {
    public static cross(v: TD3Data, w: TD3Data): TD3Data {
        return [
            v[1] * w[2] - v[2] * w[1],
            v[2] * w[0] - v[0] * w[2], 
            v[0] * w[1] - v[1] * w[0]
        ];
    }

    public static rotate([x, y, z]: TD3Data, [a, b, c]: TD3Data): TD3Data {
        return ((cosA, sinA, cosB, sinB, cosC, sinC) => [
            x * cosA * cosB - y * cosA * sinB * sinC + z * cosA * sinB * cosC,
            x * sinA * cosB + y * sinA * sinB * sinC - z * sinA * sinB * cosC,
            -x * sinB + y * cosB * sinC + z * cosB * cosC
        ])(
            Math.cos(a), Math.sin(a), 
            Math.cos(b), Math.sin(b), 
            Math.cos(c), Math.sin(c));
    }

    public static rotateWithOrigin(v: TD3Data, o: TD3Data, [a, b, c]: TD3Data): TD3Data {
        return this.add(o, this.rotate(this.sub(v, o), [a, b, c]));
    }

    public static rotateAroundAxis([x, y, z]: TD3Data, [a, b, c]: TD3Data, angle: number): TD3Data {
        return ((cos, sin) => [
            a * (a * x + b * y + c * z) * (1 - cos) + x * cos + (-c * y + b * z) * sin,
            b * (a * x + b * y + c * z) * (1 - cos) + y * cos + (c * x - a * z) * sin,
            c * (a * x + b * y + c * z) * (1 - cos) + z * cos + (-b * x + a * y) * sin
        ])(Math.cos(angle), Math.sin(angle));
    }
}