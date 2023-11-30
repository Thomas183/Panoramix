import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditReportRoutingModule } from './edit-report-routing.module';
import { EditSchematicComponent } from './edit-schematic/edit-schematic.component';
import { EditViewsComponent } from './edit-views/edit-views.component';
import { EditReportComponent } from './edit-report.component';
import { TabMenuModule } from "primeng/tabmenu";
import { EditInfoComponent } from './edit-info/edit-info.component';
import {TableModule} from "primeng/table";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {ButtonModule} from "primeng/button";
import {NgxLeaderLineModule} from "ngx-leader-line";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {ChartModule} from "primeng/chart";
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    EditSchematicComponent,
    EditViewsComponent,
    EditReportComponent,
    EditInfoComponent
  ],
    imports: [
        CommonModule,
        EditReportRoutingModule,
        TabMenuModule,
        TableModule,
        CdkDrag,
        ButtonModule,
        NgxLeaderLineModule,
        DropdownModule,
        InputTextModule,
        ChartModule,
        FormsModule,
        CheckboxModule
    ]
})
export class EditReportModule { }
