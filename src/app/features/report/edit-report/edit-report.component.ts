import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {EditReportService} from "@services/edit-report.service";

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

    reportId: string = 'AYxDcz1WZGwuApUDmUxcsA';

    constructor(private _editReportService: EditReportService) {
    }

    ngOnInit() {
        this._editReportService.reportId = this.reportId
    }

    ngOnDestroy() {
        this._editReportService.reportId = '';
    }


}
