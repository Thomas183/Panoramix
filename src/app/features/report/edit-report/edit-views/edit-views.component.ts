import {Component} from '@angular/core';
import {Chart} from "../../../../shared/models/chart";
import {DataService} from "../../../../shared/services/data.service";
import {ApiSchematicResponse} from "../../../../shared/models/api-schematic-response";
import {ApiDataResponse} from "../../../../shared/models/api-data-response";

@Component({
    selector: 'app-edit-views',
    templateUrl: './edit-views.component.html',
    styleUrls: ['./edit-views.component.scss']
})
export class EditViewsComponent {

    // Type sélectionné du dropdown
    selectedType: 'bar' | 'pie' | 'radar';

    // Map des traductions du dropdown en type de graphique
    chartMap = {
        'Batons': 'bar',
        'Disque': 'pie',
        'Radar': 'radar'
    }

    // Liste des charts générés
    chartList: Array<Chart> = [];

    // Liste des types de chart pour le dropDown
    chartTypes: Array<string> = [];

    schematicArray: Array<ApiSchematicResponse> = [
        {
            id: "01BX5ZZKBKACTAV9WEVGEMMVRY",
            log: {
                "createdAt": "2019-08-24T14:15:22.000Z",
                "createdBy": "user@example.com",
                "updatedAt": "2019-08-24T14:15:22.000Z",
                "updatedBy": "user@example.com"
            },
            fact: false,
            coord: {
                x: 10,
                y: 20
            },
            table: "DimNace",
            headers: [
                {
                    pk: true,
                    name: "SKNace",
                    type: "NUMBER"
                }
            ]
        },
        {
            id: "01BX5ZZKBKACTAV9WEVGEMMVRY",
            log: {
                createdAt: "2019-08-24T14:15:22.000Z",
                createdBy: "user@example.com",
                updatedAt: "2019-08-24T14:15:22.000Z",
                updatedBy: "user@example.com"
            },
            fact: true,
            coord: {
                x: 10,
                y: 20
            },
            table: "FactEffectifs",
            headers: [
                {
                    fk: {
                        field: "SKNace",
                        table: "DimNace"
                    },
                    pk: false,
                    name: "NaceFK",
                    type: "STRING"
                }
            ]
        }
    ];
    constructor(private _dataService: DataService) {
        for (let key of Object.keys(this.chartMap)) {
            this.chartTypes.push(key)
        }
    }

    getLabels(){

    }

    createChart(type: string) {
        this.chartList.push()
    }

    schematics: Array<ApiSchematicResponse> = [
        {
            "id": "01BX5ZZKBKACTAV9WEVGEMMVRY",
            "log": {
                "createdAt": "2019-08-24T14:15:22Z",
                "createdBy": "user1@example.com",
                "updatedAt": "2019-08-24T14:15:22Z",
                "updatedBy": "user1@example.com"
            },
            "fact": true,
            "coord": {
                "x": 10,
                "y": 20
            },
            "table": "Table1",
            "headers": [
                {"pk": true, "name": "SKNace", "type": "INT"},
                {"fk": {"field": "Field1", "table": "Table1"}, "pk": false, "name": "NaceFK", "type": "STRING"}
            ]
        },
        {
            "id": "02BX5ZZKBKACTAV9WEVGEMMVRY",
            "log": {
                "createdAt": "2019-08-25T14:15:22Z",
                "createdBy": "user2@example.com",
                "updatedAt": "2019-08-25T14:15:22Z",
                "updatedBy": "user2@example.com"
            },
            "fact": false,
            "coord": {
                "x": 15,
                "y": 25
            },
            "table": "Table2",
            "headers": [
                {"pk": true, "name": "SKNace2", "type": "INT"},
                {"fk": {"field": "Field2", "table": "Table2"}, "pk": false, "name": "NaceFK2", "type": "STRING"}
            ]
        }
    ];
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

/*{
    type: this.chartMap[type],
    data: {
        datasets: [
            {data: [1, 2, 3]},
        ],
        labels: [
            'test',
            'test1',
            'test2',
        ]
    }
}*/

/*
prepareDataForChart(
    response1: ApiSchematicResponse[],
    response2: ApiDataResponse,
    fieldToChart: keyof Values
): ChartData {
    // Mapping pk and fk from response1
    const pkFkMap = new Map<string, string>();
    response1.forEach(item => {
        item.headers.forEach(header => {
            if (header.pk) {
                pkFkMap.set(item.id, header.name);
            } else if (header.fk) {
                pkFkMap.set(header.fk.field, header.name);
            }
        });
    });

    // Extracting labels and data points from response2
    const labels = response2.data.map(item => item.id);
    const dataPoints = response2.data.map(item => item.values[fieldToChart]);

    // Ensure that dataPoints only contains numbers
    const numericDataPoints = dataPoints.map(value => {
        // Convert to number if it's not already a number, else default to 0
        return typeof value === 'number' ? value : parseFloat(value) || 0;
    });

    // Prepare dataset for Chart.js
    const dataset: ChartData = {
        labels: labels,
        datasets: [{
            label: `Data for ${String(fieldToChart)}`,
            data: numericDataPoints, // Use the numeric data points
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    return dataset;
}*/
