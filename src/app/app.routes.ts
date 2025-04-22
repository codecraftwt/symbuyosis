import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'opportunity',
    //     pathMatch: 'full'
    // },
    {
        path:'',
        loadComponent:()=>import('./pages/landing/landing.component').then(c=>c.LandingComponent)
    },
    {
        path: 'opportunity',
        loadComponent: () => import('./pages/opportunity/opportunity.component').then(c=>c.OpportunityComponent)
    },
    
];
