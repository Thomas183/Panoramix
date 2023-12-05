import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { report } from 'src/app/shared/models/report';
import { NgModule } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { AllcsvService } from 'src/app/shared/services/allcsv.service';
import { DataTableForm } from 'src/app/shared/models/data-table-form';
import { TableService } from 'src/app/shared/services/table.service';
import { Table } from 'src/app/shared/models/table';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

  value : string;
  report: report[] = [];

  //formulaire
  registerForm : FormGroup;
  constructor(private _fb : FormBuilder,
              private allcsvservice : AllcsvService,
              private TableService : TableService
    ) {
    this.registerForm = this._fb.group({
      name : [null, Validators.required, ],
      description : [null, Validators.required]
    });
  }
  createReport() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }


  items = this.TableService.tables;
  selectedItems!: any[];
  selectAll = false;
  drupy:any[] = [];

  onSelectAllChange(event) {
      this.selectedItems = event.checked ? [...this.items] : [];
      this.selectAll = event.checked;
      event.updateModel(this.selectedItems, event.originalEvent)
  }

  onChange(event) {
      this.selectedItems = []
      this.selectedItems = event.value
  }

  lancement(selectedItems){
    localStorage.setItem(Math.floor(Math.random()*1000).toString(), JSON.stringify(this.getIds()));
  }

  getIds(): Array<string>{
      const tableIds : Array<string> = [];
      for(let selectedItem of this.selectedItems){
          tableIds.push(selectedItem.tableId)
      }
      return tableIds;
  }
}
