import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  dropdownItems: Array<{ name: string }> = [
    { name: 'utilisateur' },
    { name: 'administrateur' }
  ];

  registerForm: FormGroup;
  connectedUser : User | undefined;

constructor(private _fb : FormBuilder,
  private _authService:AuthService,
  private _router:Router) {
  this.registerForm = this._fb.group({
    firstname : [null,[Validators.required],],
    lastname : [null,[Validators.required],],
    email : [null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
    password : [null,[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)],],
    dateOfBirth : [null,[Validators.required,Validators.pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)],],
    role : ['utilisateur']
  })
}
  
ngOnInit() :void {
  const storedUser = localStorage.getItem('connectedUser');
  this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
  this._authService.$connectedUser.subscribe({
    next : (value) => {
      this.connectedUser = value;
      console.log(this.connectedUser)
    },
    
  })
}

createUser() : void {

  if(!this.registerForm.valid) {
    this.registerForm.markAllAsTouched(); 
    console.log('pas valide', JSON.stringify(this.registerForm.value))
  }
  else {
    console.log('formulaire valide', JSON.stringify(this.registerForm.value));
    this._authService.create(this.registerForm.value);
    this._router.navigate(['/auth/manageUsers']);
  }


}

}
