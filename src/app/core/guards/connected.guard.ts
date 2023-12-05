import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../../shared/services/api/auth.service';

export const connectedGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    const authService = inject(AuthService);
    return authService.$connectedUser.pipe(map((res) => {
        if(res) {
            return false;
        }
        else {
            router.navigateByUrl('');
            return false;
        }
    }))
};
