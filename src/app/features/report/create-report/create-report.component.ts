import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { report } from 'src/app/shared/models/report';
import { NgModule } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';


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
  constructor(private _fb : FormBuilder) {
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

  arrayCSV : any[] = [
    { name :"csv1"},
    { name :"csv2"},
    { name :"csv3"},
    { name :"csv4"},
    { name :"csv5"}
  ];
  //tableau fichiers
  items = this.arrayCSV;

  selectedItems!: any[];

  selectAll = false;

  onSelectAllChange(event) {
      this.selectedItems = event.checked ? [...this.items] : [];
      this.selectAll = event.checked;
      event.updateModel(this.selectedItems, event.originalEvent)
  }

  onChange(event) {
      const { originalEvent, value } = event
      if(value) this.selectAll = value.length === this.items.length;
  }


}

//en créant le rapport, il a un nom et un ensemble de fichiers qui lui sont ajoutés