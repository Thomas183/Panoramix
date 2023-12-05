import {Component, OnInit} from '@angular/core';
import {Chart} from "../../../../shared/models/chart";
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
    selector: 'app-edit-views',
    templateUrl: './edit-views.component.html',
    styleUrls: ['./edit-views.component.scss']
})
export class EditViewsComponent implements OnInit {

    baseUrl = environment.baseUrl;

    // Type de chart sélectionné au dropdown
    selectedChartType: { nom: string, type: string } = {
        nom: 'Batons', type: 'bar'
    };

    // Types de chart disponible au dropdown, nom correspond au nom d'affichage et type au type de chartJS
    chartTypes: Array<{ nom: string, type: string }> = [
        {nom: 'Batons', type: 'bar'},
        {nom: 'Disque', type: 'pie'},
        {nom: 'Radar', type: 'radar'},
    ]

    // Liste des charts générés
    chartList: Array<Chart> = [];

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {
        const credentials = {login: 'Devs.PanoraMix@hotmail.com', password: 'admin'}

        this._httpClient.post(`${this.baseUrl}/api/login`, credentials).subscribe({
            next: (value) => {
                console.log(value);
            }
        })
    }

    createChart(type: string) {
        this.chartList.push({
            type: type,
            data: null,
        })
    }
}
