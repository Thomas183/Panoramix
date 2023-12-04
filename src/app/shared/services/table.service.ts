import {Injectable} from '@angular/core';
import {Table} from "../models/table";
import {ApiDataResponse} from "../models/api-data-responses";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TableService {

    baseUrl: string = 'https://localhost:8080'

    constructor(private _httpClient: HttpClient) {
    }

    tables: Array<Table> = [];

    createProject(): Observable<string> {
        return this._httpClient.post<string>(`${this.baseUrl}/api/projects`, {
            name: 'nomDuProjet',
            description: 'descriptionDuProjet'
        });
    }

    getProjects(): Observable<unknown[]> {
        return this._httpClient.get<unknown[]>(`${this.baseUrl}/api/projects`, {
            params: {
                page: 1,
                size: 1,
            }
        })
    }

    continue() {
        const localStorageObject: {
            projectId: string | undefined,
            tableIdArray: Array<string> | undefined
        } = {projectId: null, tableIdArray: []}

        this.createProject().subscribe({
            next(value) {
                localStorageObject.projectId = value;
            },
            error(value) {
                console.log(value)
            },
            complete() {
                // localStorage.setItem(localStorageObject);

            }
        })
    }
}
