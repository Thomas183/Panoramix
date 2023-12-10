import {Component, OnInit} from '@angular/core';
import {FullChart} from "@models/api/view";
import {PaginatorState} from "primeng/paginator";
import {EditReportService} from "@services/edit-report.service";

@Component({
    selector: 'app-display-views',
    templateUrl: './display-views.component.html',
    styleUrls: ['./display-views.component.scss']
})
export class DisplayViewsComponent implements OnInit {
    private _displayedChartIndex: number = 0;

    get displayedChartIndex(): number{
        return this._displayedChartIndex;
    }
    set displayedChartIndex(index: number) {
        this._displayedChartIndex = index;
    }

    displayedChart: FullChart;
    chartCount: number = 0;

    constructor(private _editReportService: EditReportService) {
    }

    ngOnInit() {
        console.log('chargé')
        this._editReportService.displayedChart.subscribe({
            next: (chart) => {
                this.displayedChart = chart;
                this.chartCount = this._editReportService.chartList.length;
            }
        })
    }


    onPageChange(event: PaginatorState): void {
        this.displayedChartIndex = event.page
        this.displayedChart = null
        setTimeout(() => {
            this._editReportService.displayChart(this.displayedChartIndex);
        }, 0)
    }
}
