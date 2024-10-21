import { CVectorBaseBuilder } from "../base";
import { TD3Data } from "./d3-data.type";

export class CD3Vector extends CVectorBaseBuilder<TD3Data>() {
    public static cross(v: TD3Data, w: TD3Data): TD3Data {
        return [
            v[1] * w[2] - v[2] * w[1],
            v[2] * w[0] - v[0] * w[2], 
            v[0] * w[1] - v[1] * w[0]
        ];
    }
}