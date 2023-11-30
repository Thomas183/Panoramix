import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SchematicResponse} from "../models/schematic-response";

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    constructor(private _httpClient: HttpClient) {

    }

    projectId: number;
    baseUrl : string;

    getSchematic(projectId: number): Observable<SchematicResponse[]> {
        return this._httpClient.get<SchematicResponse[]>(`${this.baseUrl}/${projectId}/schema`);
    }

    editSchematic(projectId: number, schematic: SchematicResponse) : Observable<SchematicResponse[]>{
        return this._httpClient.put<SchematicResponse[]>(`${this.baseUrl}/${projectId}/schema`, schematic)
    }
}
