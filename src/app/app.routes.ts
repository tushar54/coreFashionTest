import { Routes } from '@angular/router';
import { Login } from './AuthSystem/login/login';
import { Registration } from './AuthSystem/registration/registration';
import { MainComponent } from './main-component/main-component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
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
