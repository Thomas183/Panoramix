import {Injectable} from '@angular/core';
import {SchemaTable} from "@models/api/schematic";
import {ReportService} from "@services/api/report.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DisplaySchematicService {

    reportId: string;

    private _schematics: BehaviorSubject<SchemaTable[]> = new BehaviorSubject([]);
    public schematics: Observable<SchemaTable[]> = this._schematics.asObservable();

    constructor(private _reportService: ReportService) {
    }

    initializeSchematics(): void {

        this._reportService.getReportSchematics(this.reportId).subscribe({
            next: (schematics) => {
                this._schematics.next(schematics)
                //TODO this._changeDetectorRef.detectChanges();
                // this.tableElementArray = this.tableRefArray.toArray();
                // this.populateDataMap().subscribe();
            },
            complete: () => {
                //this.getLinks();
            }
        })
    }
}
