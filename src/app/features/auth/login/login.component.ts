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
    notLogged: boolean = false
    connectedUser: User | undefined;

    constructor(private _fb: FormBuilder,
                private _httpClient: HttpClient,
                private router: Router,
                private _authService: AuthService) {
        this.loginForm = this._fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

    ngOnInit(): void {
        const storedUser = localStorage.getItem('connectedUser');
        this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
        this._authService.$connectedUser.subscribe({
            next: (value) => {
                this.connectedUser = value;
                // console.log(this.connectedUser)
            },

        })
    }

    connect(): void {
        if (!this.loginForm.valid) {
            console.log('pas valide',this.loginForm)

        } else {
            this._authService.login('Devs.PanoraMix@hotmail.com', 'admin')
            }}

    
    

    disconnect() {
        this._authService.logout()
    }


}


