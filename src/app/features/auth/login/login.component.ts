import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '@services/api/auth.service';
import { DialogModule } from 'primeng/dialog';
import { Password } from 'primeng/password';


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
alert('Combinaison Email - Mot de passe incorrecte')
        } else {
            const email = this.loginForm.get('email')?.value;
            const password = this.loginForm.get('password')?.value;

            if (email && password) {
                this._authService.login(email, password);

            }}}

    disconnect() {
        this._authService.logout()
    }
}