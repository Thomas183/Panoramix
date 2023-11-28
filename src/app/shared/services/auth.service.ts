import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlRegister : string = 'http://localhost:3000/user'
  urlLogin : string = 'à definir'

  user : User | undefined;
  private _$connectedUser : BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(this.getUser());
  $connectedUser : Observable<User | undefined> = this._$connectedUser.asObservable();

  getUser() : User | undefined {
    return this.user
  }

  constructor(private _http:HttpClient,
    private _router:Router ) {  }

    create(register:Register):void {
      this._http.post(this.urlRegister,register)
      .subscribe({
        next : response => {
          alert('Utilisateur enregistré')
          // this._router.navigate(['la page admin avec la liste des users getAll']);
        },
        error:error => {
          console.log ('register fail', register, error)
        }
      })
    }
}

