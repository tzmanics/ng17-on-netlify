import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test-1/test-1.component';
import { Test2Component } from './test-2/test-2.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'test-1', component: Test1Component},
{ path: 'test-2', component: Test2Component },
];
