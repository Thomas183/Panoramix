import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { report } from 'src/app/shared/models/report';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

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

}
