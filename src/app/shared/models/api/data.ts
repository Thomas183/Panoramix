import {HistoryLog} from "../historyLog";

export interface Data {
    id: string,
    values: any,
    log: HistoryLog,
}

export interface DataForm{

}

export interface DataRow {     [key: string]: string }