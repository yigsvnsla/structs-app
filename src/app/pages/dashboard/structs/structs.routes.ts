import { Routes } from '@angular/router';

export const DASHBOARD_STRUCTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('./structs.page')).StructsPage,
    children: [
      // {
      //   path: '',
      //   loadComponent: async () => (await import('../../components/dashboard/dashboard.component')).DashboardComponent,
      // },
      // {
      //   path:'structs',
      //   loadChildren: async ()=> (await import("./structs/structs.routes")).
      // }
    ],
  },
];
