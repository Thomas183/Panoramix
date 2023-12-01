import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

  dropdownItems: Array<{ name: string }> = [
    { name: 'utilisateur' },
    { name: 'administrateur' }
  ];

  userForm: FormGroup;
  userId: number;

  constructor(private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _ActiveRoute: ActivatedRoute) {
    this.userForm = this._fb.group({
      firstname: [null, [Validators.required],],
      lastname: [null, [Validators.required],],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
      // password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)],],
      dateOfBirth: [null, [Validators.required, Validators.pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)],],
      role: ['utilisateur']
    });
    this.userId = +this._ActiveRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
    this._authService.getById(this.userId).subscribe({
      next: (user) => {
        this.userForm.patchValue({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          dateOfBirth: user.dateOfBirth,
          role: user.role
        });
      },
      error: () => {
        this._router.navigateByUrl('/notfound');
      }
    })
  }

  updateUser(): void {
    this._authService.update(this.userId, this.userForm.value).subscribe({
      complete: () => {
        this._router.navigateByUrl('/auth/manageUsers');
      }
    });

  }
}
