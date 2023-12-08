import {Component, OnInit} from '@angular/core';
import {Chart} from "@models/chart";
import {ReportService} from "@services/api/report.service";
import {SchemaTable, SchemaTableHeader} from "@models/api/schematic";
import {EditReportService} from "@services/edit-report.service";
import {ViewService} from "@services/api/view.service";
import {catchError, forkJoin, map, Observable, of} from "rxjs";
import {TableService} from "@services/api/table.service";
import {DropdownChangeEvent} from "primeng/dropdown";

interface FieldInfo {
    facTabletId: string;
    factheaderId: string;
    dimTableId: string;
    dimFieldId: string;
    dimFieldName?: string
}


@Component({
    selector: 'app-edit-views',
    templateUrl: './edit-views.component.html',
    styleUrls: ['./edit-views.component.scss']
})
export class EditViewsComponent implements OnInit {

    fields: Array<{}>

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
        /*
               -=====-                         -=====-
                _..._                           _..._
              .~     `~.                     .~`     ~.
      ,_     /          }                   {          \     _,
     ,_\'--, \   _.'`~~/                     \~~`'._   / ,--'/_,
      \'--,_`{_,}    -(                       )-    {,_}`_,--'/
       '.`-.`\;--,___.'_                     _'.___,--;/`.-`.'
         '._`/    |_ _{@}                   {@}_ _|    \`_.'
            /     ` |-';/           _       \;'-| `     \
           /   \    /  |       _   {@}_      |  \    /   \
          /     '--;_       _ {@}  _Y{@}        _;--'     \
         _\          `\    {@}\Y/_{@} Y/      /`          /_
        / |`-.___.    /    \Y/\|{@}Y/\|//     \    .___,-'| \
       --`------'`--`^^^^^^^^^^^^^^^^^^^^^^^^^`--`'------`--`^^^^^^^
        * */
        const foreignKeys = this.schematics
            .filter(schematic => schematic.fact)
            .flatMap(schematic =>
                schematic.headers
                    .filter(header => header.fk !== null)
                    .map(header => ({
                        facTabletId: schematic.id,
                        factHeaderId: header.id,
                        dimTableId: header.fk.table,
                        dimFieldId: header.fk.field,
                        dimFieldName: null,
                    }))
            );

        forkJoin(
            foreignKeys.map(foreignKey =>
                this._tableService.getTable(foreignKey.dimTableId).pipe(
                    catchError(() => of(null)), // Handle errors if needed
                    map(table => table ? table.headers
                        .filter(header => header.id !== foreignKey.dimFieldId) // Exclude the field matching dimFieldId
                        .map(header => ({
                            factTableId: foreignKey.facTabletId,
                            factHeaderId: foreignKey.factHeaderId,
                            dimTableId: foreignKey.dimTableId,
                            dimFieldId: header.id,
                            dimFieldName: header.name,
                        })) : [])
                )
            )
        ).subscribe(resultArray => {
            const fieldData = resultArray.flat(); // Flatten the array of arrays
            this.fields = fieldData;
        });
    }

    handleDropDownChangeEvent(axisIndex: number, event: DropdownChangeEvent) {
        console.log(event.value)
    }

    createChart(type: string) {

        this.chartList.push({
            type: type,
            data: null,
        })
    }
}
