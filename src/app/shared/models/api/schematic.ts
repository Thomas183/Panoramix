import {HistoryLog} from "../historyLog";
import {b, n} from "@fullcalendar/core/internal-common";

export interface SchemaTable {
    id: string, // ID de la table
    table: string, // Nom de la table
    fact: boolean,
    headers: Array<{
        id: string,
        name: string,
        pk: boolean,
        fk?: {
            table: string,
            field: string,
        }
        log: HistoryLog,
        coord: {
            x: number,
            y: number,
        }
    }>
}

export interface SchemaTableForm {
    id: string,
    fact: boolean,
    headers: Array<{
        id: string,
        pk: boolean,
        fk?: {
            table: string,
            field: string,
        }
    }>
    coord: {
        x: number,
        y: number,
    }
}
