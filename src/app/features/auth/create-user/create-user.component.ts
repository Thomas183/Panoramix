import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
registerForm: FormGroup;

constructor(private _fb : FormBuilder) {
  this.registerForm = this._fb.group({
    firstname : [null,[Validators.required],],
    lastname : [null,[Validators.required],],
    email : [null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
    dateOfBirth : [null,[Validators.required,Validators.pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)],],
    password : [null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)]],
    role : [null,[Validators.required]]
  })
}
  

createUser() : void {

  if(!this.registerForm.valid) {
    this.registerForm.markAllAsTouched(); 
    console.log('pas valide')
  }
  else {
    console.log('formulaire valide', JSON.stringify(this.registerForm.value));
  }


}

}
