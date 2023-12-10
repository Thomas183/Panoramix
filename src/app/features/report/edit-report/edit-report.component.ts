import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {EditReportService} from "@services/edit-report.service";
import {HttpClient} from "@angular/common/http";
import {ReportService} from "@services/api/report.service";
import {first} from "rxjs";

@Component({
    selector: 'app-edit-report',
    templateUrl: './edit-report.component.html',
    styleUrls: ['./edit-report.component.scss']
})
export class EditReportComponent implements OnInit, OnDestroy {

    menuItems: any = [
        {label: 'Général', icon: 'pi pi-cog', routerLink: 'editInfo'},
        {label: 'Schéma', icon: 'pi pi-sitemap', routerLink: 'editSchematics'},
        {label: 'Vues', icon: 'pi pi-chart-bar', routerLink: 'editViews'},
    ]

    reportId: string;

    constructor(private _editReportService: EditReportService, private _reportService: ReportService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.reportId = params['id'];
            if (this.reportId){
                this._editReportService.reportId = params['id'];
                this._editReportService.getCharts();
            }
        })
    }

    ngOnDestroy() {
    }


}
