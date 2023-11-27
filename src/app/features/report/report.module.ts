import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateReportComponent} from "./create-report/create-report.component";
import {ExploreReportsComponent} from "./explore-reports/explore-reports.component";
import {MyReportsComponent} from "./my-reports/my-reports.component";
import {ReportRoutingModule} from "./report-routing.module";
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
      CreateReportComponent,
      ExploreReportsComponent,
      MyReportsComponent,

      
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReportModule { }
