import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from "./create-user/create-user.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {LoginComponent} from "./login/login.component";
import {UpdateUserComponent } from './update-user/update-user.component';
import { adminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
    {
        path: 'createUser',
        component: CreateUserComponent, canActivate : [adminGuard]
    },
    {
        path: 'manageUsers',
        component: ManageUsersComponent, canActivate : [adminGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'updateUser/:id',
        component: UpdateUserComponent, canActivate : [adminGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
