import {Injectable} from '@angular/core';
import {Table} from "../models/table";
import {ApiDataResponse} from "../models/api-data-responses";

@Injectable({
    providedIn: 'root'
})
export class TableService {

    constructor() {
    }

    public tables: Array<Table> = [];


}
