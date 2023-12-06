import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../shared/services/api/auth.service';
import { UserFormPatch } from '@models/api/users';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

  dropdownItems: Array<{ role: string }> = [
    { role: 'USER' },
    { role: 'ADMIN' }
  ];

  userForm: FormGroup;
  userId: string;
  

  constructor(private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _ActiveRoute: ActivatedRoute) {
      
    this.userForm = this._fb.group({
      firstName: [null, [Validators.required],],
      lastName: [null, [Validators.required],],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
      role: ['USER'],
      isActivated : ['true']
    });
    this.userId = this._ActiveRoute.snapshot.params['id'];
  }





  ngOnInit(): void {
    this._authService.getByIdToModify(this.userId).subscribe({
      next: (user) => {
        console.log(user);
        this.userForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          email: user.email,
        });
      },
      error: () => {
        console.log('j\'y suis j\'y reste');
        this._router.navigateByUrl('/notfound');
      }
    })
  }

  updateUser(): void {
console.log(this.userForm.value);
    this._authService.update(this.userId, this.userForm.value).subscribe({
      complete: () => {
        console.log('fin de update')
        // this._router.navigateByUrl('/auth/manageUsersc');
      }
    });

  }




}
