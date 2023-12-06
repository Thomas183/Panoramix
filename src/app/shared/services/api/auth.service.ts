import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { User, UserFormPatch } from '@models/api/users';
import {Register} from '@models/register';
import {UserLogin} from '@models/userLogin';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _baseUrl: string = environment.baseUrl;

    user: User | undefined;
    private _$users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    $users: Observable<User[]> = this._$users.asObservable();

    private _$connectedUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(this.getUser());
    $connectedUser: Observable<User | undefined> = this._$connectedUser.asObservable();

    constructor(private _http: HttpClient,
        private _router: Router) {
}

    getUser(): User | undefined {
        return this.user
    }

    create(register: Register): void {
        this._http.post(`${this._baseUrl}/users`, register)
            .subscribe({
                next: response => {
                    this._router.navigate(['auth/manageUsers']);
                },
                error: error => {
                    console.log('une erreur s\' est produite')
                },
                complete:() => {
                    location.reload(); // simule f5 pour faire disparaitre le menu à gauche
                }
            })
    }

    login(email: string, password: string): void {
        this._http.post<{token:string}>(`${this._baseUrl}/auth/sign-in`, { login: email, password: password }).subscribe({
            next: response => {
                localStorage.setItem('apiToken', response.token);
                return response
            },
            error:error => {
                console.log('something went wrong with your login');
                return error
            },
            complete:() => {
                location.reload(); // simule f5 pour faire disparaitre le menu à gauche
            }
        });
    }

    logout() {
        localStorage.clear();
        this._$connectedUser.next(undefined);
        this._router.navigate(['auth/login'])
        location.reload(); // simule f5 pour faire disparaitre le menu à gauche
        ;
    }

    getAll(): void {
        this._http.get<any>(`${this._baseUrl}/users?page=0&size=1000`).subscribe({

            next: (value) => {
                this._$users.next(value.data)
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    getById(id: string): Observable<User> {
        return this._http.get<User>(`${this._baseUrl}/users/` + id);

    }

    getByIdToModify(id: string): Observable<UserFormPatch> {
        return this._http.get<UserFormPatch>(`${this._baseUrl}/users/` + id);

    }


    update(id: string, user: UserFormPatch): Observable<UserFormPatch> {

        console.log(`${this._baseUrl}/users/` + id, user)

        // console.log(this._baseUrl + id, user)
        return this._http.patch<UserFormPatch>(`${this._baseUrl}/users/` + id, user);
    }

    delete(id: string): Observable<User> {
        return this._http.delete<User>(`${this._baseUrl}/users/` + id);
    }
}
