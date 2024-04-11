import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router'


export const normalGuard: CanActivateFn = (route, state) => {
    if(localStorage.getItem('role') == 'normal') {
        return true
    }

    new Router().navigate(['/account/login'])
    return false
}
