import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '@services/api/auth.service';
import {DialogModule} from 'primeng/dialog';
import {Password} from 'primeng/password';
import {Message, MessageService} from "primeng/api";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;
    messages: Array<Message> = [
        {severity: 'warn', detail: "Combinaison E-mail / Mot de passe incorrecte"}, // 0
        {severity: 'warn', detail: "Formulaire invalide"}, // 1
    ]


    constructor(
        private _fb: FormBuilder,
        private _messageService: MessageService,
        private _authService: AuthService,
        private _router: Router) {

        this.loginForm = this._fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

    ngOnInit() {
        this._authService.getLoggedUser().subscribe({
            next: () => {
                this._router.navigate(['/dashboard']);
            },
            error: (err) => {

            }
        })
    }

    connect(): void {
        if (!this.loginForm.valid) {
            this.displayMessage(0)
            return
        }
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;

        if (email && password) {
            this._authService.login(email, password).subscribe({
                next: response => {
                    localStorage.setItem('apiToken', response.token);
                    return
                },
                error: error => {
                    this.displayMessage(0)
                    return
                },
                complete: () => {
                    this._router.navigate(['/dashboard'])
                    setTimeout(() => {
                        location.reload()
                    }, 10);
                }
            });
        }
    }

    displayMessage(message: number) {
        this._messageService.add(this.messages[0]);

        setTimeout(() => {
            this._messageService.clear();
        }, 3500)
    }
}
