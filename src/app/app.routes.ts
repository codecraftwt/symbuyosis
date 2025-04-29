import { Routes } from '@angular/router';
// import { authGuard } from './_helper/guard/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'create-account',
        loadComponent: () => import('./auth/components/create-account/create-account.component').then(c => c.CreateAccountComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/components/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./layout/web-layout/web-layout.component').then(c => c.WebLayoutComponent), // public page
    },
    {
        path: 'layout',
        loadComponent: () => import('./layout/main-layout/main-layout.component').then(c => c.MainLayoutComponent),
        children: [
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent)
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
            },
            {
                path: 'create-opportunity',
                loadComponent: () => import('./pages/opportunity/opportunity.component').then(c => c.OpportunityComponent)
            },
            {
                path: 'my-opportunities',
                loadComponent: () => import('./pages/opportunities/opportunities.component').then(c => c.OpportunitiesComponent)
            },
            {
                path: 'review-opportunity',
                loadComponent: () => import('./pages/post-an-opportunity/post-an-opportunity.component').then(c => c.PostAnOpportunityComponent)
            },
            {
                path: 'search-results',
                loadComponent: () => import('./pages/enquire-an-opportuntiy/enquire-an-opportuntiy.component').then(c => c.EnquireAnOpportuntiyComponent)
            },
            {
                path: 'search-opportunity',
                loadComponent: () => import('./pages/search-opportunities/search-opportunities.component').then(c => c.SearchOpportunitiesComponent)
            },
        ]
    },
    // {
    //     path: '', redirectTo: 'home', pathMatch: 'full'
    // },
    // {
    //     path: 'create-account',
    //     loadComponent: () => import('./auth/components/create-account/create-account.component').then(c => c.CreateAccountComponent)
    // },
    // {
    //     path: 'login',
    //     loadComponent: () => import('./auth/components/login/login.component').then(c => c.LoginComponent)
    // },
    // {
    //     path: 'home',  // Public page
    //     loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent)
    // },
    // {
    //     path: 'about-us',  // Public page
    //     loadComponent: () => import('./pages/about-us/about-us.component').then(c => c.AboutUsComponent)
    // },
    // {
    //     path: 'dashboard',
    //     loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
    //     canActivate:[authGuard]
    // },
    // {
    //     path: 'create-opportunity',
    //     loadComponent: () => import('./pages/opportunity/opportunity.component').then(c => c.OpportunityComponent),
    //     canActivate:[authGuard]
    // },
    // {
    //     path: 'my-opportunities',
    //     loadComponent: () => import('./pages/opportunities/opportunities.component').then(c => c.OpportunitiesComponent),
    //     canActivate:[authGuard]
    // },
    // {
    //     path: 'review-opportunity',
    //     loadComponent: () => import('./pages/post-an-opportunity/post-an-opportunity.component').then(c => c.PostAnOpportunityComponent),
    //     canActivate:[authGuard]
    // },
    // {
    //     path: 'search-results',
    //     loadComponent: () => import('./pages/enquire-an-opportuntiy/enquire-an-opportuntiy.component').then(c => c.EnquireAnOpportuntiyComponent),
    //     canActivate:[authGuard]
    // },
    // {
    //     path: 'search-opportunity',
    //     loadComponent: () => import('./pages/search-opportunities/search-opportunities.component').then(c => c.SearchOpportunitiesComponent),
    //     canActivate:[authGuard]
    // },
];
