import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@services/api/auth.service";
import {Message, MessageService} from "primeng/api";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    providers: [MessageService],
})
export class ChangePasswordComponent {

    changePasswordForm: FormGroup

    messages: Array<Message> = [
        {severity: 'warn', summary: 'Attention', detail: "Erreur pendant l'envoi du mot de passe"}, // 0
        {severity: 'success', detail: "Mot de passe modifié avec succès !"}, // 1
        {severity: 'warn', summary: 'Attention', detail: "Les mots de passes ne sont pas identiques"}, // 2
    ];

    constructor(private _fb: FormBuilder, private _authService: AuthService, private _messageService: MessageService) {
        this.changePasswordForm = this._fb.group({
            password: [null, Validators.required],
            confirmPassword: [null, Validators.required]
        });
    }

    changePassword(): void {
        if (!this.changePasswordForm.valid) {
            return
        }

        const password = this.changePasswordForm.get('password')?.value;
        const confirmPassword = this.changePasswordForm.get('confirmPassword')?.value;

        if (password !== confirmPassword) {
            this.displayMessage(2)
            return;
        }

        this._authService.changePassword(confirmPassword).subscribe({
            next: () => {
                this.displayMessage(1)
            },
            error: () => {
                this.displayMessage(0);
            }
        })

    }

    displayMessage(message: number) {
        this._messageService.add(this.messages[message])

        setTimeout(() => {
            this._messageService.clear();
        }, 3500)
    }
}
