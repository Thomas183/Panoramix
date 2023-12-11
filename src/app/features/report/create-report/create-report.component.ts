import {Component, Type} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Report} from '@models/api/report';

import {TableService} from "@services/api/table.service";
import {ListboxChangeEvent} from "primeng/listbox";
import {ReportService} from "@services/api/report.service";
import {DataTable} from '@models/api/table';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';


@Component({
    selector: 'app-create-report',
    templateUrl: './create-report.component.html',
    styleUrls: ['./create-report.component.scss'],
    providers: [MessageService]
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
        private _routeur: Router,
        private _messager: MessageService,
    ) {
        this.registerForm = this._fb.group({
            name: [null, Validators.required,],
            description: [null, Validators.required],
            csv: [null,]
        });
    }

    //Création du report
    createReport() {
        if (this.registerForm.valid) {
            //envoie du report en db avec réception de l'id
            this._reportService.createReport(this.registerForm.get('name')?.value, this.registerForm.get('description')?.value).subscribe({
                next: (Response) => {
                    let messageDisplayed: boolean = false;
                    //rajout de chaque tables ds le projet avec idproject + idtable
                    for (let table of this.selectedItems) {
                        if (!messageDisplayed) {
                            this._messager.add({
                                severity: 'success',
                                summary: 'Success',
                                detail: 'Rapport créé !, redirection'
                            });
                        }
                        messageDisplayed = true
                        this._reportService.addTableToReport(Response.id, table.id).subscribe({
                            complete: () => {
                                //Redirection vers "mes rapports"
                                setTimeout(() => {
                                    this._routeur.navigate(['/report/myReports']);
                                }, 2000)
                            }
                        })
                    }
                },
            })
        } else {
            this.registerForm.markAllAsTouched();
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
