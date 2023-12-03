import {Component, OnInit} from '@angular/core';
import {Chart} from "../../../../shared/models/chart";
import {TableService} from "../../../../shared/services/table.service";
import {GetSchematicResponse} from "../../../../shared/models/api-schematic-responses";
import {ApiDataResponse} from "../../../../shared/models/api-data-responses";

@Component({
    selector: 'app-edit-views',
    templateUrl: './edit-views.component.html',
    styleUrls: ['./edit-views.component.scss']
})
export class EditViewsComponent implements OnInit{

    // Type de chart sélectionné au dropdown
    selectedChartType: {nom: string, type: string} = {
        nom: 'Batons', type: 'bar'
    };

    // Types de chart disponible au dropdown, nom correspond au nom d'affichage et type au type de chartJS
    chartTypes: Array<{nom: string, type: string}> = [
        {nom: 'Batons', type: 'bar'},
        {nom: 'Disque', type: 'pie'},
        {nom: 'Radar', type: 'radar'},
    ]

    // Liste des charts générés
    chartList: Array<Chart> = [];

    constructor() {}

    ngOnInit() {
    }

    createChart(type: string) {
        this.chartList.push({
            type: type,
            data: null,
        })
    }


    data: ApiDataResponse = {
        "data": [
            {
                "id": "01BX5ZZKBKACTAV9WEVGEMMVRY",
                "log": {
                    "createdAt": "2019-08-24T14:15:22Z",
                    "createdBy": "user1@example.com",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "updatedBy": "user1@example.com"
                },
                "values": {
                    "field1": "Value1",
                    "field2": 100,
                    "field3": 200
                }
            },
            {
                "id": "02BX5ZZKBKACTAV9WEVGEMMVRY",
                "log": {
                    "createdAt": "2019-08-25T14:15:22Z",
                    "createdBy": "user2@example.com",
                    "updatedAt": "2019-08-25T14:15:22Z",
                    "updatedBy": "user2@example.com"
                },
                "values": {
                    "field1": 100,
                    "field2": 150,
                    "field3": 250
                }
            }
        ],
        "page": 0,
        "size": 10,
        "pages": 1
    };

}
