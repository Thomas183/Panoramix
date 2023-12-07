import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '@models/api/users';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '@services/api/auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})

export class ManageUsersComponent {

  errorUser: string = '';
  userUrl: string = environment.baseUrl

  users: User[] = [];
  $users: Observable<User[]>;
  connectedUser : User | undefined;
  loaded : boolean;

  constructor(private _httpClient: HttpClient,
    private _auth: AuthService) { }

  ngOnInit(): void {
    const storedUser: string | null = localStorage.getItem('apiToken');
    
    
    // const storedUser = localStorage.getItem('apiToken');
    // this.connectedUser = storedUser ? JSON.parse(storedUser) : null;



    // TODO: voir si modifier pour recuper je sais pas quoi


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

  delete(id: string) {
    this._auth.delete(id).subscribe({
      complete: () => {
        this.$users = this._auth.$users
        this._auth.getAll();
          },
        });
      }
  }

