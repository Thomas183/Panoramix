import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {SchemaTable, SchemaTableForm} from "@models/api/schematic";
import {Report} from "@models/api/report";

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    constructor(private _httpClient: HttpClient) {

    }

    reportId: number;
    baseUrl: string = environment.baseUrl + '/projects';


    // Rapport
    getReports(page: number, size: number, from?: 'OWNER' | 'SHARED' | 'PUBLIC'): Observable<{
        pages: number,
        page: number,
        size: number,
        data: Array<Report>
    }> {
        const httpParams = new HttpParams()
            .append('page', page)
            .append('size', size)
        if (from) {
            httpParams.append('from', from)
        }

        return this._httpClient.get<{
            pages: number,
            page: number,
            size: number,
            data: Array<Report>
        }>(this.baseUrl, {params: httpParams});
    }

    createReport(name: string, description: string): Observable<{id:string}> {
        return this._httpClient.post<{id:string}>(`${this.baseUrl}`, {name: name, description: description});
    }

    getReport(reportId: string): Observable<Report> {
        return this._httpClient.get<Report>(`${this.baseUrl}/${reportId}`)
    }

    updateReport(reportId: string, name: string, description: string, isPublic: boolean): Observable<null> {
        return this._httpClient.put<null>(`${this.baseUrl}/${reportId}`, {
            name: name,
            description: description,
            isPublic: isPublic
        })
    }

    deleteReport(reportId: string): Observable<null>{
        return this._httpClient.delete<null>(`${this.baseUrl}/${reportId}`)
    }


    // Schémas
    getProjectSchematics(reportId: number): Observable<Array<SchemaTable>> {
        return this._httpClient.get<Array<SchemaTable>>(`${this.baseUrl}/${reportId}/schema`);
    }

    editSchematic(reportId: number, schematic: SchemaTableForm): Observable<null> {
        return this._httpClient.put<null>(`${this.baseUrl}/${reportId}/schema`, schematic)
    }

    getReportSchematicIds(reportId: number): Observable<Array<string>> {
        return this._httpClient.get<Array<string>>(`${this.baseUrl}/${reportId}/schema/tables`)
    }

    addTableToReport(reportId: string, tableId: string): Observable<null> {
        return this._httpClient.post<null>(`${this.baseUrl}/${reportId}/schema/tables/${tableId}`, null)
    }

    deleteTableFromSchematic(reportId: string, tableId: string): Observable<null> {
        return this._httpClient.delete<null>(`${this.baseUrl}/${reportId}/schema/tables/${tableId}`);
    }
}
