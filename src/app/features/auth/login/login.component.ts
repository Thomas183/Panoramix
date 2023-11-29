import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  dropdownItems: Array<string> = [
    'Utilisateur',
    'Admin'
  ]

  loginForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private _httpClient: HttpClient,
    private router: Router,
    private _authService: AuthService) {
    this.loginForm = this._fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  connect(): void {
    if (!this.loginForm.valid) {
      console.log('pas valide')
    } else {

      this._authService.login(this.loginForm.value);
    }
  }




}


