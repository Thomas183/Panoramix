import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})

  // @NgModule({
  //   schemas: [
  //     CUSTOM_ELEMENTS_SCHEMA
  //   ]
  // })
  
export class ManageUsersComponent {

  ngOnInit(): void {
    this.getAll();
}



errorUser : string = '';
userUrl : string ="http://localhost:3000/users";
users : User[] = [];

constructor(private _httpClient : HttpClient) {}

getAll() : void {
  this.errorUser = '';

  this._httpClient.get<User[]>(this.userUrl).subscribe({
    next : (value) => { this.users = value },
    error : (error) => { 
      console.log(error);         
      if(error.status === 401) {
        this.errorUser = 'Vous devez être connecté.e pour voir les utilisateurs';
      }
     }
    
  })
}

}
