import { Routes } from '@angular/router';
//Auth pages
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
//Brans pages
import { BrandsListComponent } from './pages/brands/brands-list/brands-list.component';
// Products pages
import { ProductsListComponent } from './pages/products/products-list/products-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'brands', component: BrandsListComponent },
    { path: 'products', component: ProductsListComponent }
];
