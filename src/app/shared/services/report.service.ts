import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetSchematicResponse, PutSchematic} from "../models/api-schematic-responses";
import {ApiDataResponse} from "../models/api-data-responses";

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    constructor(private _httpClient: HttpClient) {

    }

    projectId: number;
    baseUrl : string;

    getSchematics(projectId: number): Observable<GetSchematicResponse[]> {
        return this._httpClient.get<GetSchematicResponse[]>(`${this.baseUrl}/${projectId}/schema`);
    }

    editSchematic(projectId: number, schematic: PutSchematic) : Observable<null>{
        return this._httpClient.put<null>(`${this.baseUrl}/${projectId}/schema`, schematic)
    }

    getTableData(tableId: string): Observable<ApiDataResponse[]> {
        return this._httpClient.get<ApiDataResponse[]>(`${this.baseUrl}/tables/${tableId}/data`)
    }

    addTableToReport(projectId: string, tableId: string): Observable<null>{
        return this._httpClient.post<null>(`${this.baseUrl}/projects/${projectId}/schema/tables/${tableId}`, null)
    }
}
