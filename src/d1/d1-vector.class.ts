import { CVectorBase } from "../base";
import { ID1Vector } from "./d1-vector.interface";
import { D1Data } from "./d1-data.type";

export class CD1Vector extends CVectorBase<D1Data> implements ID1Vector {
    cross(_v: D1Data): D1Data {
        throw new TypeError("Method not implemented.");
    }
}