import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },
    {
        path: 'opportunity',
        loadComponent: () => import('./pages/opportunity/opportunity.component').then(c => c.OpportunityComponent)
    },
    {
        path: 'opportunities',
        loadComponent: () => import('./pages/opportunities/opportunities.component').then(c => c.OpportunitiesComponent)
    },
    {
        path: 'post-an-opportunity',
        loadComponent: () => import('./pages/post-an-opportunity/post-an-opportunity.component').then(c => c.PostAnOpportunityComponent)
    },
    {
        path: 'enquire-an-opportunity',
        loadComponent: () => import('./pages/enquire-an-opportuntiy/enquire-an-opportuntiy.component').then(c => c.EnquireAnOpportuntiyComponent)
    },
    {
        path: 'search-opportunities',
        loadComponent: () => import('./pages/search-opportunities/search-opportunities.component').then(c => c.SearchOpportunitiesComponent)
    },

];
