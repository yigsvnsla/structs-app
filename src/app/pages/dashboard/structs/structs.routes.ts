import { Routes } from '@angular/router';

export const DASHBOARD_STRUCTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('./structs.page')).StructsPage,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:"list"
      },
      {
        path: 'new',
        loadComponent: async () => (await import('../../../components/structs/forms/form-new-structs/form-new-structs.component')).FormNewStructsComponent,
      },
      {
        path:'list',
        loadComponent: async ()=> (await import("../../../components/structs/structs-table/structs-table.component")).StructsTableComponent
      }
    ],
  },
];
