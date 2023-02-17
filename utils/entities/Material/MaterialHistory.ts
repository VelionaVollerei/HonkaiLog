import {LogGenerator, MaterialLogCollection} from "./MaterialLogCollection";
import {Material, MaterialJSON} from "@/utils/entities/Material/Material";
import {MaterialModel} from "@prisma/client";
import {MaterialQuantityLogModel} from ".prisma/client";
import {MaterialQuantityLogJSON} from "@/utils/entities/Material/MaterialQuantityLog";
import {UserDataExport} from "@/utils/types/export/UserDataExport";

export class MaterialHistory {
    /** The collection holding all the logs made by the user for the logs */
    public readonly logCollection: MaterialLogCollection
    /** The material concerned */
    public readonly material: Material
    /** Id of the user the data is from */
    public readonly userID: string;

    constructor(material: Material, materialQuantityLogs: MaterialLogCollection, userId: string) {
        this.material = material
        this.userID = userId;
        this.logCollection = materialQuantityLogs
    }

    get id() {
        return this.material.id
    }

    get name() {
        return this.material.name
    }

    public static fromJSON(data: MaterialHistoryJSON, logGenerators: LogGenerator[] | undefined = undefined): MaterialHistory {
        return new MaterialHistory(
            Material.fromJSON(data.material),
            MaterialLogCollection.fromJson(data.logs, logGenerators),
            data.idUser
        )
    }

    public static fromModels(material: MaterialModel, logs: MaterialQuantityLogModel[], idUser: string): MaterialHistory {
        return new MaterialHistory(
            Material.fromModel(material),
            MaterialLogCollection.fromModel(logs),
            idUser
        )
    }

    public copy(): MaterialHistory {
        const matModel = this.toModels();
        return MaterialHistory.fromModels(matModel.material, matModel.logs, this.userID)
    }

    public getLogs() {
        return this.logCollection;
    }

    public hasLogs(): boolean {
        return this.logCollection.logs.length !== 0;
    }

    public toJSON(): MaterialHistoryJSON {
        return {
            material: this.material.toJSON(),
            logs: this.logCollection.toJSON(),
            idUser: this.userID
        }
    }

    public toModels(): { material: MaterialModel; logs: MaterialQuantityLogModel[] } {
        return {
            material: this.material.toModel(),
            logs: this.logCollection.toModel()
        }
    }

    public toString(plural?: boolean, startcase?: boolean): string {
        return this.material.toString(plural, startcase);
    }
}

export type MaterialHistoryJSON = { material: MaterialJSON, logs: MaterialQuantityLogJSON[], idUser: string }

export interface MaterialHistory {

}