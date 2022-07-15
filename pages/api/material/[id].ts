import {SequelizeCRUD} from "../../../tools/Database/SequelizeCRUD";
import database from "../../../database/database";

export interface MaterialAPIFetchResponse { //TODO: Check if the type is correct. There might be some missing createdAt and co
    id: number,
    name: string
}

const handler = SequelizeCRUD.getIDRouteHandlerFromModel(database.Material);
export default handler