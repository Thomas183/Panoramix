import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Report} from '@models/api/report';

import {TableService} from "@services/api/table.service";
import {ListboxChangeEvent} from "primeng/listbox";
import {ReportService} from "@services/api/report.service";
import {DataTable} from '@models/api/table';
import {Router} from '@angular/router';


@Component({
    selector: 'app-create-report',
    templateUrl: './create-report.component.html',
    styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

    value: string;
    report: Report[] = [];

    ngOnInit(): void {
        //Récupération des tables
        this._tableService.getTables(0, 100).subscribe({
            next: (value) => {
                this.items = value.data
            }
        });
    }

    // Formulaire
    registerForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _tableService: TableService,
        private _reportService: ReportService,
        private _routeur: Router) {
        this.registerForm = this._fb.group({
            name: [null, Validators.required,],
            description: [null, Validators.required],
            csv: [null,]
        });
    }

    //Création du report
    createReport() {
        if (this.registerForm.valid) {
            console.log("form valide")
            //envoie du report en db avec réception de l'id
            this._reportService.createReport(this.registerForm.get('name')?.value, this.registerForm.get('description')?.value).subscribe({
                next: (Response) => {
                    //rajout de chaque tables ds le projet avec idproject + idtable
                    for (let table of this.selectedItems) {
                        this._reportService.addTableToReport(Response.id, table.id).subscribe({
                            complete: () => {
                                //Redirection vers "mes rapports"
                                this._routeur.navigate(['/report/myReports']);
                            }
                        })
                    }
                },
            })
        } else {
            this.registerForm.markAllAsTouched();
            console.log("form invalide")
        }
    }

    // Tableau fichiers
    //items un array de table{}
    items: Array<DataTable>;
    selectedItems!: any[];

    onChange(event: ListboxChangeEvent) {
        this.selectedItems = []
        this.selectedItems = event.value
    }
}
