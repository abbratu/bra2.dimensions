import { CVectorBase } from "../base";
import { ID3Vector } from "./d3-vector.interface";
import { TD3Data } from "./d3-data.type";

export class CD3Vector extends CVectorBase<TD3Data> implements ID3Vector {
    cross(v: TD3Data): TD3Data {
        return [
            this.data[1] * v[2] - this.data[2] * v[1],
            this.data[2] * v[0] - this.data[0] * v[2], 
            this.data[0] * v[1] - this.data[1] * v[0]
        ];
    }
}