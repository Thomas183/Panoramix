import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Register } from '../models/register';
import { UserLogin } from '../models/userLogin';
import { UserReceived } from '../models/userReceived';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlRegister : string = 'http://localhost:3000/register'
  urlLogin : string = 'http://localhost:3000/login'
  userUrl : string ="http://localhost:3000/users";

  user : User | undefined;
  private _$users : BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  $users : Observable<User[]> = this._$users.asObservable();

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

    login(user : UserLogin):void {
      this._http.post<UserReceived>(this.urlLogin, user).subscribe({
        next : (res : UserReceived) => {
          localStorage.setItem('apiToken', res.token);
          this._$connectedUser.next(res.member)
          console.log(res)
          // this._router.navigate(['page de l'utilisateur']);
        }
      })
    }

    getAll() : void {
      this._http.get<User[]>(this.userUrl).subscribe({
        // next : (value) => { this.users = value },
        next : (value) => { this._$users.next(value) },
        error : (error) => { 
          console.log(error);         
         }
      })
    }

    getById(id : number) {

    }
}

