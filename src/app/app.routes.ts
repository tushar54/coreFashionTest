import { Routes } from '@angular/router';
import { Login } from './AuthSystem/login/login';
import { Registration } from './AuthSystem/registration/registration';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        component: App
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'registration',
        component: Registration
    }
];
