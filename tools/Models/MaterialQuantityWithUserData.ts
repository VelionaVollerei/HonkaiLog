import {MaterialHistory} from "@/utils/Objects/Material/MaterialHistory";
import {MaterialQuantity} from "@/utils/Objects/Material/MaterialQuantity";
import {TimeRef} from "@/utils/TimeTools";
import {LogSource} from "@/utils/Types/LogSource";


/** A MaterialQuantity class with its logs having logs
 * @deprecated*/
export class MaterialQuantityWithUserData {
    materialQuantity: MaterialQuantity;
    readonly material: MaterialHistory;

    constructor(materialQuantity: MaterialQuantity, material: MaterialHistory) {
        this.materialQuantity = materialQuantity;
        this.material = material;
    }

    static addLogsToMaterialQuantity(quantity: MaterialQuantity, material: MaterialHistory) {
        if (!quantity.material.isSameMaterial(material)) throw new Error("The logs aren't the same");

        return new MaterialQuantityWithUserData(material, quantity.quantity)
    }

    /** Convert from MaterialQuantity */
    public static convertMaterialQuantity(materialQuantity: MaterialQuantity, logSource: LogSource) {
        return new MaterialQuantityWithUserData(
            materialQuantity.material.addUserData(logSource),
            materialQuantity.quantity
        )
    }

    /** Check if the user has enough in game logs to match the quantity. */
    public UserHasEnoughMaterials(): boolean {
        return this.material.logCollection.getCurrentCount() >= this.quantity;
    }

    /** Give the time needed before the user will obtain enough logs to match the quantity.  */
    public calcTimeToMatchQuantity(timeValue: TimeRef = "days"): number {
        // Check if the quantity is already achieved
        if (this.UserHasEnoughMaterials()) return 0

        // Else, calculate the time needed
        const avgGainUntilToday = this.material.logCollection.calcAvgGainUntilToday(timeValue);
        return this.getQuantityDifferenceWithCurrent() / avgGainUntilToday;
    }

    /** Give the number of days before the user will obtain enough logs to match the quantity.
     *  @deprecated
     */
    getDaysToMatchQuantity(dateFrom?: Date, dateTo?: Date): number {
        // Check if the quantity is already achieved
        if (this.UserHasEnoughMaterials()) return 0

        const currentGainsPerDay = this.material.logCollection.getAverageGainOfPeriod(dateFrom, dateTo);
        return this.getQuantityDifferenceWithCurrent() / currentGainsPerDay;
    }

    /** Give the difference between the quantity and the current funds of the user. */
    getQuantityDifferenceWithCurrent(): number {
        return this.quantity - this.material.logCollection.getCurrentCount();
    }
}