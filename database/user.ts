import {SequelizeTableCommonDBResults} from "../tools/Types";

export interface UserDBResponse extends SequelizeTableCommonDBResults {
    id: string;
    name: string;
}


