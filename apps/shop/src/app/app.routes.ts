import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
];
