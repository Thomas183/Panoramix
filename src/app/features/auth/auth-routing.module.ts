import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from "./create-user/create-user.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {LoginComponent} from "./login/login.component";
import {UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
    {
        path: 'createUser',
        component: CreateUserComponent,
    },
    {
        path: 'manageUsers',
        component: ManageUsersComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'updateUser/:id',
        component: UpdateUserComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
