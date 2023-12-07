import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Report} from '@models/api/report';
import {User} from "@models/user";
import {TableService} from "@services/api/table.service";
import {ListboxChangeEvent} from "primeng/listbox";
import {ReportService} from "@services/api/report.service";
import { DataTable, Table } from '@models/api/table';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-create-report',
    templateUrl: './create-report.component.html',
    styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

    baseUrl = environment.baseUrl;
    connectedUser: User | undefined;

    value: string;
    report: Report[] = [];
    listTables : Array<DataTable>
    
    ngOnInit(): void {
        //Récupération des tables
        this._tableService.getTables(0,100).subscribe({
            next:(value)=>{
                this.items = value.data
            }
        });
        const credentials = {login: 'Devs.PanoraMix@hotmail.com', password: 'admin'}
    }

    // Formulaire
    registerForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _tableService : TableService,
        private _reportService : ReportService,
        private _routeur : Router) {
        this.registerForm = this._fb.group({
            name: [null, Validators.required,],
            description: [null, Validators.required],
            csv:[null,]
        });
    }

    //Création du report
    createReport() {
        if (this.registerForm.valid) {
            console.log("form valide")
            //envoie du report en db avec réception de l'id
            this._reportService.createReport(this.registerForm.get('name')?.value, this.registerForm.get('description')?.value).subscribe({
                next : (Response) => {
                    //rajout de chaque tables ds le projet avec idproject + idtable
                    this._reportService.addTableToReport(Response.id,this.items[0].id).subscribe({
                        next : () =>{
                            console.log("tables ajoutées au rapport")
                        }
                    })
                },
        })
            //Redirection vers "mes rapports"
            this._routeur.navigate(['/report/myReports']);
        } else {
            this.registerForm.markAllAsTouched();
            console.log("form invalide")
        }
    }

    // Tableau fichiers
        //items un array de table{}
    items : Array<DataTable>;
    selectedItems!: any[];

    onChange(event: ListboxChangeEvent) {
        this.selectedItems = []
        this.selectedItems = event.value
    }
}