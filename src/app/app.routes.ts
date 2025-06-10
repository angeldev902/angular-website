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
        path: 'brands/new', 
        loadComponent: () => import('../app/pages/brands/brand-detail/brand-detail.component').then(m => m.BrandDetailComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'categories', 
        loadComponent: () => import('../app/pages/categories/categories-list/categories-list.component').then(m => m.CategoriesListComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'categories/new', 
        loadComponent: () => import('../app/pages/categories/category-detail/category-detail.component').then(m => m.CategoryDetailComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'products', 
        loadComponent: () => import('../app/pages/products/products-list/products-list.component').then(m => m.ProductsListComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'products/new', 
        loadComponent: () => import('../app/pages/products/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
        canActivate: [authGuard] 
    },
];
