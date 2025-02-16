import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService)
  const toastr = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(usr => {
      if(usr) return true
      else {
        toastr.error('You shall not pass!');
        return false;
      }
    })
  )
};
