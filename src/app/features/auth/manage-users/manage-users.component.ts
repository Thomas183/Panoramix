import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})


export class ManageUsersComponent {




  errorUser: string = '';
  userUrl: string = "http://localhost:3000/users";
  users: User[] = [];
  $users: Observable<User[]>;

  constructor(private _httpClient: HttpClient,
    private _auth: AuthService) { }

  ngOnInit(): void {
    this.$users = this._auth.$users
    this._auth.getAll();
  }
}