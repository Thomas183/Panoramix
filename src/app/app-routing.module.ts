import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';


import {SettingsComponent} from "./features/settings/settings.component";
import {LoginComponent} from "./features/auth/login/login.component";
import { connectedGuard } from './core/guards/connected.guard';
import { adminGuard } from './core/guards/admin.guard';
import {AppNotfoundComponent} from "./pages/app.notfound.component";
import {AppErrorComponent} from "./pages/app.error.component";
import {AppAccessdeniedComponent} from "./pages/app.accessdenied.component";



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
                    {
                        path: 'notfound',
                        component: AppNotfoundComponent,
                    },
                    {
                        path: 'error',
                        component: AppErrorComponent
                    },
                    {
                        path: 'accessDenied',
                        component: AppAccessdeniedComponent,
                    }
                ]
            },
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
