import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AuthService } from '@services/api/auth.service';
import { Router } from '@angular/router';
import { User } from '@models/api/users';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  dropdownItems: Array<{ role: string }> = [
    { role: 'USER'},
    { role: 'ADMIN'}
  ];

  

  registerForm: FormGroup;
  connectedUser : User | undefined;

constructor(private _fb : FormBuilder,
  private _authService:AuthService,
  private _router:Router) {
  this.registerForm = this._fb.group({
    firstName : [null,[Validators.required],],
    lastName : [null,[Validators.required],],
    email : [null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
    password : [null,[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)],],
    role : ['USER'],
    isActivated : [true],
  })
}



ngOnInit() :void {
  const storedUser = localStorage.getItem('apiToken');
  this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
  this._authService.$connectedUser.subscribe({
    next : (value) => {
      this.connectedUser = value;
      
    },

  })
}

createUser() : void {

  if(!this.registerForm.valid) {
    this.registerForm.markAllAsTouched();
   
  }
  else {
    this._authService.create(this.registerForm.value);
    this._router.navigate(['/auth/manageUsers']);
  }


}

}
