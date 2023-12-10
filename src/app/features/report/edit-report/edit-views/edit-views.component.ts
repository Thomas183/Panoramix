import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {FullChart, ViewForm} from "@models/api/view";
import {ReportService} from "@services/api/report.service";
import {SchemaTable} from "@models/api/schematic";
import {EditReportService} from "@services/edit-report.service";
import {ViewService} from "@services/api/view.service";
import {catchError, forkJoin, map, of} from "rxjs";
import {TableService} from "@services/api/table.service";
import {DropdownChangeEvent} from "primeng/dropdown";
import {Chart as ChartJs, ChartItem} from "chart.js"
import {PaginatorState} from "primeng/paginator";
import {Chart} from '@models/api/view'
import {UIChart} from "primeng/chart";
import {Router} from "@angular/router";

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
    @ViewChild('chart') chartObject: UIChart
    @ViewChild('paginator') paginator: PaginatorState
    reportId: string;
    fields: Array<FieldInfo>
    selectedData: FieldInfo;
    selectedLabel: FieldInfo;

    // Type de chart sélectionné au dropdown
    selectedChartType: { nom: string, type: 'BAR' | 'RADAR' | 'PIE' } = {
        nom: 'Batons', type: 'BAR',
    };

    chartColors = [
        '#FF6384', '#36A2EB', '#FFCE56',
        '#4BC0C0', '#F77825', '#9966FF',
        '#ADFF2F', '#FF4500', '#1E90FF',
        '#FFD700', '#8B008B', '#00FA9A'
    ];

    // Types de chart disponible au dropdown, nom correspond au nom d'affichage et type au type de chartJS
    chartTypes: Array<{ nom: string, type: 'BAR' | 'RADAR' | 'PIE' }> = [
        {nom: 'Batons', type: 'BAR'},
        {nom: 'Disque', type: 'PIE'},
        {nom: 'Radar', type: 'RADAR'},
    ]

    // Liste des charts générés
    chartList: Array<FullChart> = [];
    displayedChart: FullChart;

    schematics: Array<SchemaTable>;

    constructor(
        private _tableService: TableService,
        private _reportService: ReportService,
        private _editReportService: EditReportService,
        private _viewService: ViewService,
        private _router: Router) {
    }


    ngOnInit() {
        this.reportId = this._editReportService.reportId
        this._reportService.getReportSchematics(this.reportId).subscribe({
            next: (schematics) => {
                this.schematics = schematics;
            },
            complete: () => {
                this.getFields();
            }
        })
        this._editReportService.displayedChart.subscribe({
            next: (chart) => {
                this.displayedChart = chart;
            }
        })
    }

    getForeignKeys() {
        return this.schematics
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
    }

    getFieldsFromTable(table, foreignKey) {
        return table ? table.headers
            .filter(header => header.id !== foreignKey.dimFieldId)
            .map(header => ({
                factTableId: foreignKey.facTabletId,
                factHeaderId: foreignKey.factHeaderId,
                dimTableId: foreignKey.dimTableId,
                dimFieldId: header.id,
                dimFieldName: header.name,
            })) : [];
    }

    getFields() {
        const foreignKeys = this.getForeignKeys();

        forkJoin(
            foreignKeys.map(foreignKey =>
                this._tableService.getTable(foreignKey.dimTableId).pipe(
                    catchError(() => of(null)), // Handle errors if needed
                    map(table => this.getFieldsFromTable(table, foreignKey))
                )
            )
        ).subscribe(resultArray => {
            this.fields = resultArray.flat();
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

    createChart(value: string | null = null) {
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
                    complete: () => {
                        location.reload();
                    }
                })
            }
        })
    }

    deleteChart(viewId: string): void {
        this._viewService.deleteView(this.reportId, viewId).subscribe()

        this.chartList = this.chartList.filter(chart =>
            chart.viewId !== viewId
        );

        if (!this._editReportService.displayNextChart(this._editReportService.displayedChartIndex)) {
            this._editReportService.displayPreviousChart(this._editReportService.displayedChartIndex)
        }
        location.reload();
    }
}
