import { Routes } from '@angular/router';
//Auth pages
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
//Brans pages
import { BrandsListComponent } from './brands/brands-list/brands-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'brands', component: BrandsListComponent }
];
