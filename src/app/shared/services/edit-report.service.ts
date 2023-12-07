import { Injectable } from '@angular/core';
import {SchemaTable} from "@models/api/schematic";
import {ReportService} from "@services/api/report.service";
import {DataService} from "@services/api/data.service";

@Injectable({
  providedIn: 'root'
})
export class EditReportService {

    reportId: string;

    schematics: Array<SchemaTable> = [];

  constructor(private _reportService : ReportService, private _dataService: DataService) { }


}
