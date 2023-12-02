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
  connectedUser : User | undefined;
  loaded : boolean;

  constructor(private _httpClient: HttpClient,
    private _auth: AuthService) { }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('connectedUser');
    this.connectedUser = storedUser ? JSON.parse(storedUser) : null;
    this.loaded=false;
    this._auth.$connectedUser.subscribe({
      next : (value) => {
        this.connectedUser = value;
        this.$users = this._auth.$users
        this._auth.getAll();
      },
    })
    this.loaded=true;


  }

  // ngOnInit(): void {
  //   this.$users = this._auth.$users
  //   this.connectedUser = this._auth.$connectedUser

  //   this._auth.getAll();
  // }





  delete(id: number) {
    this._auth.delete(id).subscribe({
      complete: () => {
        this.$users = this._auth.$users
        this._auth.getAll();
          },
        });
      }
  }

