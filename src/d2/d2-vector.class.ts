import { CVectorBase } from "../base";
import { ID2Vector } from "./d2-vector.interface";
import { TD2Data } from "./d2-data.type";

export class CD2Vector extends CVectorBase<TD2Data> implements ID2Vector {
    cross(_v: TD2Data): TD2Data {
        throw new TypeError("Method not available for 2D vectors"); 
    }
}