import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '@services/api/auth.service';
import { User } from '@models/api/users';

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
    // notLogged: boolean = false
    // connectedUser: User | undefined;

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

        } else {
            const email = this.loginForm.get('email')?.value;
            const password = this.loginForm.get('password')?.value;


            if (email && password) {
                this._authService.login(email, password);



            // this._authService.login(this.loginForm.     'email reçu', 'pw')
            }}}

    
    

    disconnect() {
        this._authService.logout()
    }


}


