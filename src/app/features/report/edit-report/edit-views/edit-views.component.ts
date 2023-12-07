import {Component, OnInit} from '@angular/core';
import {Chart} from "@models/chart";
import {ReportService} from "@services/api/report.service";
import {SchemaTable, SchemaTableHeader} from "@models/api/schematic";
import {EditReportService} from "@services/edit-report.service";
import {ViewService} from "@services/api/view.service";
import {forkJoin, map, Observable} from "rxjs";
import {TableService} from "@services/api/table.service";
import {DropdownChangeEvent} from "primeng/dropdown";
import {ViewForm} from "@models/api/view";


@Component({
    selector: 'app-edit-views',
    templateUrl: './edit-views.component.html',
    styleUrls: ['./edit-views.component.scss']
})
export class EditViewsComponent implements OnInit {

    fields: Array<{ name: string, id: string, table: string }>

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

    schematics: Array<SchemaTable>;

    viewAxisX: ViewForm

    constructor(
        private _tableService: TableService,
        private _reportService: ReportService,
        private _editReportService: EditReportService,
        private _viewService: ViewService) {
    }


    ngOnInit() {
        this._reportService.getReportSchematics(this._editReportService.reportId).subscribe({
                next: (schematics) => {
                    this.schematics = schematics;
                },
                complete: () => {
                    this.getFields()
                }
            }
        )
    }

    getFields() {
        const foreignKeys = this.schematics
            .filter(schematic => schematic.fact)
            .flatMap(schematic => schematic.headers)
            .filter(header => header.fk !== null)
            .map(header => header.fk);

        const uniqueTables = [...new Set(foreignKeys.map(fk => fk.table))];

        const tableObservables = uniqueTables.map(table =>
            this._tableService.getTable(table)
        );

        forkJoin(tableObservables).subscribe(tables => {
            const fields = [];

            foreignKeys.forEach(fk => {
                const tableIndex = uniqueTables.indexOf(fk.table);
                const table = tables[tableIndex];

                if (table) {
                    fields.push({
                        fk,
                        fieldNames: table.headers
                    });
                }
            });

            this.fields = fields.flatMap(field =>
                field.fieldNames.map(fieldName => ({
                    ...fieldName,
                    table: field.fk.table
                })))
            console.log(this.fields)
        });
    }

    handleDropDownChangeEvent(axisIndex: number, event: DropdownChangeEvent) {

    }

    createChart(type: string) {

        this.chartList.push({
            type: type,
            data: null,
        })
    }
}
