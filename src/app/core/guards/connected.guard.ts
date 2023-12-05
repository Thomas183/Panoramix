import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {map} from 'rxjs';
import {AuthService} from '@services/api/auth.service';

export const connectedGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    const authService = inject(AuthService);
    return authService.$connectedUser.pipe(map((res) => {
        if (res) {
            return true;
        } else {
            //router.navigateByUrl('/denied');
            return true;
        }
    }))
};
