import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {map} from 'rxjs';
import {AuthService} from '@services/api/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {

    const storedUser: string | null = localStorage.getItem('apiToken');

    const decodedPayload: string = atob(storedUser.split('.')[1]);
    const parsedPayload: any = JSON.parse(decodedPayload);
    
    if (parsedPayload && parsedPayload.role === 'ADMIN') {
            return true
        }
        else  {
            return false;
        }





    // const router = inject(Router);
    // const authService = inject(AuthService);


    // return authService.$connectedUser.pipe(map((res) => {
    //     if (res && res.role == "administrateur") {
    //         return true;
    //     } else {
    //         //router.navigateByUrl('/denied');
    //         return false;
    //     }
    // }))
};
