import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: async () =>
      (await import('./pages/dashboard/dashboard.routes')).DASHBOARD_ROUTES,
  },
];
