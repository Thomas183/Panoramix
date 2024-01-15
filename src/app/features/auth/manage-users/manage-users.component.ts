import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {User} from '@models/api/users';
import {AuthService} from '@services/api/auth.service';
import {Implement} from "@angular/cli/lib/config/workspace-schema";

@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.scss']
})

export class ManageUsersComponent implements OnInit  {

    connectedUser: User
    users: Array<User>

    constructor(private _httpClient: HttpClient,
                private _authService: AuthService) {
    }

    ngOnInit(): void {
        this._authService.getConnectedUser().subscribe({
            next: (user) => {
                this.connectedUser = user
            }
        })
    }

    delete(id: string) {
        this._authService.delete(id).subscribe();
    }
}
