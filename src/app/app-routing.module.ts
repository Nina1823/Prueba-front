import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'empleados',
        pathMatch: 'full'
    },
    {
        path: 'empleados',
        loadComponent: () =>
            import('./pages/empleado-page.component').then(m => m.EmpleadosComponent)
    },
    {
        path: '**',
        redirectTo: 'empleados'
    }
];  
