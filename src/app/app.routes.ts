import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AdminComponent } from './features/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'FM T&T Associated Group | Internet rural' },
  { path: 'admin', component: AdminComponent, title: 'Administración | FM T&T' },
  { path: '**', redirectTo: '' }
];