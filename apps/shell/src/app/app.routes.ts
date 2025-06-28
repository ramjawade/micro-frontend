import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('cart/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'shop',
    loadChildren: () => import('shop/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'map',
    loadComponent: () =>
      import('@micro-frontend/map').then((m) => m!.MapComponent),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
