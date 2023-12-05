import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '@models/user';
import {Register} from '@models/register';
import {UserLogin} from '@models/userLogin';
import {UserReceived} from '@models/userReceived';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _urlRegister: string = environment.baseUrl;
    // private _urlRegister: string = 'http://localhost:3000/register'
    private _urlLogin: string = environment.baseUrl;
    // private _urlLogin: string = 'http://localhost:3000/login'
    private _urlUser: string = environment.baseUrl;
    // private _userUrl: string = "http://localhost:3000/users/";

    user: User | undefined;
    private _$users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    $users: Observable<User[]> = this._$users.asObservable();

    private _$connectedUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(this.getUser());
    $connectedUser: Observable<User | undefined> = this._$connectedUser.asObservable();

    getUser(): User | undefined {
        return this.user
    }

    constructor(private _http: HttpClient,
                private _router: Router) {
    }

    create(register: Register): void {
        this._http.post(this._urlRegister, register)
            .subscribe({
                next: response => {
                    this._router.navigate(['auth/manageUsers']);
                },
                error: error => {
                    console.log('une erreur s\' est produite')
                }
            })
    }

    login(user: UserLogin): void {
        this._http.post<UserReceived>(this._urlLogin, user).subscribe({
            next: (res: UserReceived) => {
                localStorage.setItem('apiToken', res.accessToken);
                localStorage.setItem('connectedUser', JSON.stringify(res.user));
                this._$connectedUser.next(res.user)

                this._router.navigate(['/dashboard']);
            },
            error: (err) => {
                console.log('erreur de login, gerer l erreur de "email pw"')
            }
        })
    }

    logout() {
        localStorage.clear();
        this._$connectedUser.next(undefined);
        location.reload(); // simule f5 pour faire disparaitre le menu à gauche
        this._router.navigate(['auth/login'])
        ;
    }

    getAll(): void {
        this._http.get<User[]>(this._urlUser).subscribe({
            next: (value) => {
                this._$users.next(value)
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    getById(id: number): Observable<User> {
        return this._http.get<User>(this._urlUser + id);
    }

    update(id: number, user: User): Observable<User> {
        console.log(this._urlUser + id, user)
        return this._http.patch<User>(this._urlUser + id, user);
    }

    delete(id: number): Observable<User> {
        return this._http.delete<User>(this._urlUser + id);
    }
}
