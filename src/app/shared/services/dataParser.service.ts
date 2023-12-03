import { Injectable } from '@angular/core';
import { StructuredCsv } from "../models/strctured-csv";
import * as Papa from 'papaparse';
import { ParseResult } from 'papaparse';

@Injectable({
    providedIn: 'root'
})
export class DataParserService {

    constructor() {
    }

    parseCsvFile(file: string, title: string): Promise<StructuredCsv> {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: (result) => {
                    resolve(this.structurePapaparseResult(result, title));
                },
                header: true,
                error: (error : any) => {
                    console.error('Error parsing CSV:', error);
                    reject(error);
                }
            });
        });
    }

    private structurePapaparseResult(papaResult: ParseResult<any>, title: string) : StructuredCsv {
        const customObject: StructuredCsv = {
            tableName: title,
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
