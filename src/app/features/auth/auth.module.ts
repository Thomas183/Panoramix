import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {CreateUserComponent} from "./create-user/create-user.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {DropdownModule} from "primeng/dropdown";
import {AuthRoutingModule} from "./auth-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
    declarations: [
        LoginComponent,
        CreateUserComponent,
        ManageUsersComponent,
        UpdateUserComponent,
    
    ],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        RippleModule,
        DropdownModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        TableModule
    ],
    exports: [
        ReactiveFormsModule
    ]

})
export class AuthModule {
}
