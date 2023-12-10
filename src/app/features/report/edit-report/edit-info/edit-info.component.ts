import {Component, OnInit} from '@angular/core';
import {ReportService} from "@services/api/report.service";
import {Message, MessageService} from "primeng/api";
import {EditReportService} from "@services/edit-report.service";

@Component({
    selector: 'app-edit-info',
    templateUrl: './edit-info.component.html',
    styleUrls: ['./edit-info.component.scss'],
    providers: [MessageService]
})
export class EditInfoComponent implements OnInit {

    reportId: string;
    reportTitle: string = '';
    reportDescription: string = '';
    isPublic: boolean = false;
    messages: Array<Message> = []


    constructor(private _reportService: ReportService, private _messageService: MessageService, private _editReportService: EditReportService) {

    }

    ngOnInit() {
        this.reportId = this._editReportService.reportId;
        this.getReport();
    }

    updateReport(): void {
        this._reportService.updateReport(this.reportId, this.reportTitle, this.reportDescription, this.isPublic).subscribe({
            next: () => {
                this.displayMessage('Rapport modifié avec succès')
            }
        })
    }

    displayMessage(message: string) {
        this._messageService.add({summary: message, severity: 'success'})

        setTimeout(() => {
            this._messageService.clear()
        }, 3500)
    }

    getReport(): void {
        this._reportService.getReport(this.reportId).subscribe({
            next: (report) => {
                this.reportTitle = report.name;
                this.reportDescription = report.description;
                this.isPublic = report.isPublic;
            }
        })
    }
}
