export const lol = "lol"

//import {MaterialHistoryLog} from "../tools/Database/MaterialHistoryLog";
//import {TestMaterialCountAPIResponse, TestMaterialCountAPIResponse_bigger} from "./Test Data";
//import {MaterialHistoryLogCollection} from "../tools/Database/MaterialHistoryLogCollection";
//
//describe('MaterialHistoryLogCollection tests', function () {
//    const log1 = new MaterialHistoryLog(TestMaterialCountAPIResponse.Material_logs[0]);
//    const log2 = new MaterialHistoryLog(TestMaterialCountAPIResponse.Material_logs[1]);
//    it('should return a MaterialHistoryLog object', function () {
//        const materialHistory = new MaterialHistoryLogCollection([log1, log2]);
//        expect(materialHistory).toBeInstanceOf(MaterialHistoryLogCollection);
//        expect(new MaterialHistoryLogCollection([])).toBeInstanceOf(MaterialHistoryLogCollection);
//    });
//
//    describe('Method tests', function () {
//        it('should return a MaterialHistoryLog array from a DB response', function () {
//            const materialHistory = MaterialHistoryLogCollection.DBResponseToLogCollection(TestMaterialCountAPIResponse.Material_logs);
//            expect(materialHistory).toEqual([log1, log2]);
//        });
//
//        describe('Models crunch tests', function () {
//            const logs = TestMaterialCountAPIResponse_bigger.Material_logs;
//            const materialHistory = new MaterialHistoryLogCollection(MaterialHistoryLogCollection.DBResponseToLogCollection(logs));
//            const period1 = {start: new Date(logs[0].log_date), end: new Date(logs[2].log_date)}
//            const period2 = {start: new Date(logs[1].log_date), end: new Date(logs[3].log_date)}
//
//
//            it('should give the average gain of a period', function () {
//                expect(materialHistory.getAverageGainOfPeriod(period1.start, period1.end)).toEqual(75);
//                expect(materialHistory.getAverageGainOfPeriod(period2.start, period2.end)).toEqual(100);
//            });
//
//            it('should give the net gain of a period', function () {
//                expect(materialHistory.getNetGainOfPeriod(period1.start, period1.end)).toEqual(150);
//                expect(materialHistory.getNetGainOfPeriod(period2.start, period2.end)).toEqual(200);
//            });
//        });
//    });
//});