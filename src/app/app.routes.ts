import { Routes } from '@angular/router';
//Guards
import { authGuard } from './core/guards/auth.guard';
import { notAuthGuard } from './core/guards/not-auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { 
        path: 'auth/login', 
        loadComponent: () => import('../app/pages/auth/login/login.component').then(m => m.LoginComponent),
        canActivate: [notAuthGuard] 
    },
    { 
        path: 'auth/register', 
        loadComponent: () => import('../app/pages/auth/register/register.component').then(m => m.RegisterComponent),
        canActivate: [notAuthGuard] 
    },
    { 
        path: 'brands', 
        loadComponent: () => import('../app/pages/brands/brands-list/brands-list.component').then(m => m.BrandsListComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'categories', 
        loadComponent: () => import('../app/pages/categories/categories-list/categories-list.component').then(m => m.CategoriesListComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'products', 
        loadComponent: () => import('../app/pages/products/products-list/products-list.component').then(m => m.ProductsListComponent),
        canActivate: [authGuard] 
    }
];
