import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Is the user logged in?
  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  // Get the required role from the route
  const requiredRole = route.data['role'];

  // Get the currently logged-in user
  const user = authService.getUser();

  // Check whether the user has the required role
  if (user && user.role === requiredRole) {
    return true;
  }

  // A logged-in user without permission goes home
  return router.createUrlTree(['/']);
};


