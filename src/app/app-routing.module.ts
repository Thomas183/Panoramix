import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';

import {CreateUserComponent} from "./features/auth/create-user/create-user.component";
import {ManageUsersComponent} from "./features/auth/manage-users/manage-users.component";
import {CreateReportComponent} from "./features/report/create-report/create-report.component";
import {MyReportsComponent} from "./features/report/my-reports/my-reports.component";
import {ExploreReportsComponent} from "./features/report/explore-reports/explore-reports.component";
import {ImportDataComponent} from "./features/data/import-data/import-data.component";
import {MyDataComponent} from "./features/data/my-data/my-data.component";
import {ExploreDataComponent} from "./features/data/explore-data/explore-data.component";
import {SettingsComponent} from "./features/settings/settings.component";
import {LoginComponent} from "./features/auth/login/login.component";
import { connectedGuard } from './core/guards/connected.guard';
import { adminGuard } from './core/guards/admin.guard';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {
                        path: 'auth',
                        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
                    },
                    {
                        path: 'data',
                        loadChildren: () => import('./features/data/data.module').then(m => m.DataModule), canActivate : [connectedGuard, adminGuard]
                    },
                    {
                        path: 'report',
                        loadChildren: () => import('./features/report/report.module').then(m => m.ReportModule), canActivate : [connectedGuard, adminGuard]
                    },
                    // Autres routes
                    {
                        path: 'settings',
                        component: SettingsComponent, canActivate : [connectedGuard, adminGuard]
                    },
                ]
            },
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
