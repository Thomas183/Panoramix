import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss']
})
export class EditReportComponent {
    menuItems: any = [
        {label: 'Général', icon: 'pi pi-cog', routerLink: 'editInfo'},
        {label: 'Schéma', icon: 'pi pi-sitemap', routerLink: 'editSchematics'},
        {label: 'Vues', icon: 'pi pi-chart-bar', routerLink: 'editViews'},
    ]
}
