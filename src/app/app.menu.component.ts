import { Component, OnInit } from "@angular/core";
import { AuthService } from "@services/api/auth.service";

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

    constructor(private _authService: AuthService) {
    }

    model: any[];

    private _isAdminConnected: boolean = false;
    private set isAdminConnected(value: boolean) {
        this._isAdminConnected = value;
        this.setMenuItems();
    }

    private _isUserConnected: boolean = false;
    private set isUserConnected(value: boolean) {
        this._isUserConnected = value;
        this.setMenuItems();
    }

    setMenuItems(): void {
        this.model = [
            {
                label: 'Acceuil', icon: 'pi pi-fw pi-home', visible: this._isUserConnected,
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                ]
            },
            {
                label: 'Utilisateurs',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/auth'],
                visible: this._isAdminConnected,
                items: [
                    { label: 'Créer un utilisateur', icon: 'pi pi-fw pi-id-card', routerLink: ['auth/createUser'] },
                    { label: 'Gérer les utilisateurs', icon: 'pi pi-fw pi-users', routerLink: ['auth/manageUsers'] },
                    // { label: 'Login Page (Testing)', icon: 'pi pi-fw pi-sign-in', routerLink: ['auth/login'] },
                ]
            },
            {
                label: 'Bienvenue',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/auth'],
                visible: !this._isUserConnected,
                items: [
                    { label: 'Login Page', icon: 'pi pi-fw pi-sign-in', routerLink: ['auth/login'] },
                ]
            },
            {
                label: 'Rapports', icon: 'pi pi-fw pi-prime', routerLink: ['/report'], visible: this._isUserConnected,
                items: [
                    { label: 'Créer un nouveau rapport', icon: 'pi pi-fw pi-plus', routerLink: ['report/createReport'] },
                    { label: 'Mes Rapports', icon: 'pi pi-fw pi-eye', routerLink: ['report/myReports'] },
                    {
                        label: 'Explorer les rapports',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['report/exploreReports']
                    },
                    { label: 'EditReport (Testing)', icon: 'pi pi-fw pi-ban', routerLink: ['report/editReport'] },
                ]
            },
            {
                label: 'Données', icon: 'pi pi-fw pi-compass', routerLink: ['/data'], visible: this._isUserConnected,
                items: [
                    { label: 'Importer des données', icon: 'pi pi-fw pi-file-import', routerLink: ['data/importData'] },
                    { label: 'Mes données', icon: 'pi pi-fw pi-eye', routerLink: ['data/myData'] },
                    { label: 'Explorer les données', icon: 'pi pi-fw pi-list', routerLink: ['data/exploreData'] },
                ]
            },
            {
                label: 'Autres', icon: 'pi pi-fw pi-copy', visible: this._isUserConnected,
                items: [
                    { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['settings'] },
                ]
            },
        ];
    }


    ngOnInit(): void {
        this.setMenuItems();
        const user: string | undefined = undefined;
        const storedUser: string | null = localStorage.getItem('apiToken');
        console.log(this.isAdminConnected,this.isUserConnected);
console.log('storedUser',storedUser)

        if (storedUser) {
            const decodedPayload: string = atob(storedUser.split('.')[1]);
            const parsedPayload: any = JSON.parse(decodedPayload);

            console.log('Decoded Payload:', parsedPayload.role);
            console.log(this.isAdminConnected,this.isUserConnected);

            if (parsedPayload.role === 'ADMIN') {
                this.isAdminConnected = true;
                this.isUserConnected = true;
                console.log(this.isAdminConnected,this.isUserConnected)
            }
            if (parsedPayload.role === 'USER') {
                this.isAdminConnected = false;
                this.isUserConnected = true;
                console.log(this.isAdminConnected,this.isUserConnected)

            }
        }





        // this._authService.$connectedUser.subscribe({
        //     next: (user) => {
        //         if (user.role === 'ADMIN') {
        //             this.isAdminConnected = true;
        //             this.isUserConnected = true
        //         }
        //         if (user.role === 'USER') {
        //             this.isAdminConnected = false;
        //             this.isUserConnected = true
        //         }
        //     }
        // })


        // JSON.parse(window.atob(localStorage.getItem('apiToken').split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

        // TODO A retirer au déploiment

        // this.isUserConnected = true
        // this.isAdminConnected = true

    }
}
