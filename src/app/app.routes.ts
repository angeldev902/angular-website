import { Routes } from '@angular/router';
//Guards
import { authGuard } from './core/guards/auth.guard';
import { notAuthGuard } from './core/guards/not-auth.guard';
//Auth pages
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
//Brans pages
import { BrandsListComponent } from './pages/brands/brands-list/brands-list.component';
// Products pages
import { ProductsListComponent } from './pages/products/products-list/products-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth/login', component: LoginComponent, canActivate: [notAuthGuard] },
    { path: 'auth/register', component: RegisterComponent, canActivate: [notAuthGuard] },
    { path: 'brands', component: BrandsListComponent, canActivate: [authGuard] },
    { path: 'products', component: ProductsListComponent, canActivate: [authGuard] }
];
