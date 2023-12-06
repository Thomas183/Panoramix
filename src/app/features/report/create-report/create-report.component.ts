import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Report} from '@models/api/report';
import {AuthService} from "@services/api/auth.service";
import { User } from '@models/api/users';
import {Subscription} from "rxjs";
import {TableService} from "@services/api/table.service";
import {ListboxChangeEvent} from "primeng/listbox";


@Component({
    selector: 'app-create-report',
    templateUrl: './create-report.component.html',
    styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

    connectedUser: User | undefined;

    value: string;
    report: Report[] = [];

    ngOnInit(): void {

    }

    // Formulaire
    registerForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _authService: AuthService,
        private _tableService : TableService
    ) {
        this
            .registerForm = this._fb.group({
            name: [null, Validators.required,],
            description: [null, Validators.required]
        });
    }

    createReport() {
        if (this.registerForm.valid) {
            console.log(this.registerForm.value);
        } else {
            this.registerForm.markAllAsTouched();
        }
    }

// Tableau fichiers

    items = this._tableService.tables;
    selectedItems!: any[];

    onChange(event: ListboxChangeEvent) {
        this.selectedItems = []
        this.selectedItems = event.value
    }

    lancement(selectedItems) {
        localStorage.setItem(Math.floor(Math.random() * 1000).toString(), JSON.stringify(this.getIds()));
    }

    getIds(): Array<string> {
        const tableIds: Array<string> = [];
        for (let selectedItem of this.selectedItems) {
            tableIds.push(selectedItem.tableId)
        }
        return tableIds;
    }
}
