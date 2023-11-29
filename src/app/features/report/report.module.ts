import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateReportComponent} from "./create-report/create-report.component";
import {ExploreReportsComponent} from "./explore-reports/explore-reports.component";
import {MyReportsComponent} from "./my-reports/my-reports.component";
import {ReportRoutingModule} from "./report-routing.module";
import {DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [
      CreateReportComponent,
      ExploreReportsComponent,
      MyReportsComponent,
  ],
  imports: [
    DragDropModule,
    CommonModule,
    ReportRoutingModule,
  ]
})
export class ReportModule { }
