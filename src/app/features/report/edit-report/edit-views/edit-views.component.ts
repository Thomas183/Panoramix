import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Chart, FullChart} from "@models/api/view";
import {ReportService} from "@services/api/report.service";
import {SchemaTable, SchemaTableHeader} from "@models/api/schematic";
import {EditReportService} from "@services/edit-report.service";
import {ViewService} from "@services/api/view.service";
import {catchError, forkJoin, map, Observable, of} from "rxjs";
import {TableService} from "@services/api/table.service";
import {DropdownChangeEvent} from "primeng/dropdown";
import {ViewForm} from "@models/api/view";

interface FieldInfo {
    factTableId: string;
    factHeaderId: string;
    dimTableId: string;
    dimFieldId: string;
    dimFieldName: string
}

@Component({
    selector: 'app-edit-views',
    templateUrl: './edit-views.component.html',
    styleUrls: ['./edit-views.component.scss']
})
export class EditViewsComponent implements OnInit {

    reportId: string;
    fields: Array<FieldInfo>
    selectedData: FieldInfo;
    selectedLabel: FieldInfo;

    // Type de chart sélectionné au dropdown
    selectedChartType: { nom: string, type: 'BAR' | 'RADAR' | 'PIE' } = {
        nom: 'Batons', type: 'BAR',
    };



    // Types de chart disponible au dropdown, nom correspond au nom d'affichage et type au type de chartJS
    chartTypes: Array<{ nom: string, type: 'BAR' | 'RADAR' | 'PIE' }> = [
        {nom: 'Batons', type: 'BAR'},
        {nom: 'Disque', type: 'PIE'},
        {nom: 'Radar', type: 'RADAR'},
    ]

    // Liste des charts générés
    chartList: Array<FullChart> = [];

    schematics: Array<SchemaTable>;

    constructor(
        private _tableService: TableService,
        private _reportService: ReportService,
        private _editReportService: EditReportService,
        private _viewService: ViewService) {
    }


    ngOnInit() {
        this.reportId = this._editReportService.reportId
        this._reportService.getReportSchematics(this.reportId).subscribe({
                next: (schematics) => {
                    this.schematics = schematics;
                },
                complete: () => {
                    this.getFields();
                    this.getCharts();
                }
            }
        )

    }

    getFields() {
        // Me demandez pas, ça me trouve ce que je veux et j'ai pas le temps, j'ai mis des anges pour être sur que ça fonctionne
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

    handleDropDownChangeEvent(isLabel: boolean, event: DropdownChangeEvent) {
        if (isLabel) {
            this.selectedLabel = event.value;
        }
        if (!isLabel) {
            this.selectedData = event.value;
        }
    }

    createChart(pkValue: string | null = null) {
        const view: ViewForm = {
            chart: this.selectedChartType.type,
            label: {
                table: this.selectedLabel.dimTableId,
                field: this.selectedLabel.dimFieldId
            },
            data: {
                table: this.selectedData.dimTableId,
                field: this.selectedData.dimFieldId,
            }
        }
        this._viewService.createView(this.reportId, view).subscribe({
            next: (viewId) => {
                this._viewService.getChartFromView(this.reportId, viewId.id).subscribe({
                    next: (chart) => {
                        this.chartList.push({...chart, type: this.selectedChartType.type})
                    }
                })
            }
        })
    }

    getCharts(): void {
        this._viewService.getViews(0, 10, this.reportId).subscribe({
            next: (views) => {
                for (let view of views.data) {
                    this._viewService.getChartFromView(this.reportId, view.id).subscribe({
                        next: (chart) => {
                            this.chartList.push({...chart, type: view.chart})
                        }
                    })
                }
            }
        })
    }
}
