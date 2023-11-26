import { Injectable } from '@angular/core';
import { StructuredCsv } from "../models/strctured-csv";
import * as Papa from 'papaparse';
import { ParseResult } from 'papaparse';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {
    }

    parseCsvFile(event: any) : StructuredCsv | null {
        const file = event.target.files[0];

        Papa.parse(file, {
            complete: (result) => {
                const title = this.getFileInfo(event).file.name
                return this.structurePapaparseResult(event, title)
            }
        })
        return null
    }

    getFileInfo(event: any) {
        return event.files[0];
    }

    structurePapaparseResult(papaResult: ParseResult<any>, title: string) : StructuredCsv {
        const customObject: StructuredCsv = {
            table: title,
            fact: false,
            headers: [],
            data: papaResult.data
        };

        const firstRow = papaResult.data[0]
        for (const header of papaResult.meta.fields!) {
            const value = firstRow[header]
            let type: 'INT' | 'FLOAT' | 'STRING' = 'STRING';

            let NumericValue = Number(value)
            if (isNaN(NumericValue)) {
                type = 'STRING'
            } else if (Number.isInteger(NumericValue)) {
                type = 'INT';
            } else {
                type = 'FLOAT'
            }

            customObject.headers.push({
                name: header,
                type: type,
                pk: false,
                fk: null,
            })
        }

        return customObject
    }

}
