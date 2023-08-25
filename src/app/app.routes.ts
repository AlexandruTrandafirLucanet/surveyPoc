import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'custom-form',
        pathMatch: 'full'
    },
    {
        path: 'custom-form',
        loadComponent() {
            return import('./pages/custom-form/custom-form.component').then(m => m.CustomFormComponent);
        },
    },
    {
        path: 'surveyjs',
        loadComponent() {
            return import('./pages/surveyjs/surveyjs.component').then(m => m.SurveyjsComponent);
        },
    }
];
