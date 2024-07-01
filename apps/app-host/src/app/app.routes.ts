import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'typing-speed',
    loadChildren: () =>
      import('typing-speed/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'memory',
    loadChildren: () => import('memory/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'tic-tac-toe',
    loadChildren: () =>
      import('tic-tac-toe/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
