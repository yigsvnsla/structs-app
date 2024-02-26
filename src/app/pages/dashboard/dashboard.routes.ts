import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('./dashboard.page')).DashboardPage,
    children: [
      {
        path: '',
        loadComponent: async () =>
          (await import('../../components/dashboard/dashboard.component'))
            .DashboardComponent,
      },
    ],
  },
];
