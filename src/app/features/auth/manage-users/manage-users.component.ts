import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})

  
export class ManageUsersComponent {

  
  
  
  errorUser : string = '';
  userUrl : string ="http://localhost:3000/users";
  users : User[] = [];
  
  constructor(private _httpClient : HttpClient,
    private _auth : AuthService) {}
  
  ngOnInit(): void {
    this._auth.$users.subscribe({next : (value) => {this.users = value}})
    this._auth.getAll();
}


// getAll() : void {
//   this.errorUser = '';

//   this._httpClient.get<User[]>(this.userUrl).subscribe({
//     next : (value) => { this.users = value },
//     error : (error) => { 
//       console.log(error);         
//       if(error.status === 401) {
//         this.errorUser = 'Vous devez être connecté.e pour voir les utilisateurs';
//       }
//      }
    
//   })
// }

}
