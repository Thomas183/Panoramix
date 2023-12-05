import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/api/auth.service";

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;"
                [item]="item" [index]="i" [visible]="true" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    constructor() {
    }

    model: any[];

    ngOnInit(): void {
        this.model = [
            {
                label: 'Acceuil', icon: 'pi pi-fw pi-home',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
                ]
            },
            {
                label: 'Utilisateurs',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/auth'],
                items: [
                    {label: 'Créer un utilisateur', icon: 'pi pi-fw pi-id-card', routerLink: ['auth/createUser']},
                    {label: 'Gérer les utilisateurs', icon: 'pi pi-fw pi-users', routerLink: ['auth/manageUsers']},
                    {label: 'Login Page (Testing)', icon: 'pi pi-fw pi-sign-in', routerLink: ['auth/login']},
                ]
            },
            {
                label: 'Rapports', icon: 'pi pi-fw pi-prime', routerLink: ['/report'],
                items: [
                    {label: 'Créer un nouveau rapport', icon: 'pi pi-fw pi-plus', routerLink: ['report/createReport']},
                    {label: 'Mes Rapports', icon: 'pi pi-fw pi-eye', routerLink: ['report/myReports']},
                    {
                        label: 'Explorer les rapports',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['report/exploreReports']
                    },
                    {label: 'EditReport (Testing)', icon: 'pi pi-fw pi-ban', routerLink: ['report/editReport']},
                ]
            },
            {
                label: 'Données', icon: 'pi pi-fw pi-compass', routerLink: ['/data'],
                items: [
                    {label: 'Importer des données', icon: 'pi pi-fw pi-file-import', routerLink: ['data/importData']},
                    {label: 'Mes données', icon: 'pi pi-fw pi-eye', routerLink: ['data/myData']},
                    {label: 'Explorer les données', icon: 'pi pi-fw pi-list', routerLink: ['data/exploreData']},
                ]
            },
            {
                label: 'Autres', icon: 'pi pi-fw pi-copy',
                items: [
                    {label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['settings']},
                ]
            },
        ];
    }
}
