import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { report } from 'src/app/shared/models/report';
import { NgModule } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { AllcsvService } from 'src/app/shared/services/allcsv.service';
import { DataTableForm } from 'src/app/shared/models/data-table-form';


@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

  value : string;
  report: report[] = [];

  ngOnInit(): void {
    this.getAllTables();
  }

  //formulaire
  registerForm : FormGroup;
  constructor(private _fb : FormBuilder,
              private allcsvservice : AllcsvService
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


  //récupérer les ttes les tables
  alltable : DataTableForm[] = [];

  getAllTables() : void{
    this.allcsvservice.getAllcsv(0,10).subscribe(
      (data) => {
        // this.alltable.
        // Handle the data received from the API
        console.log(data);
      },
      (error) => {
        // Handle errors
        console.error(error);
      }
    )
  }
}

//en créant le rapport, il a un nom et un ensemble de fichiers qui lui sont ajoutés
