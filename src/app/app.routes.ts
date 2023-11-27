import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test-1/test-1.component';
import { Test2Component } from './test-2/test-2.component';
import { ForoComponent } from './foro/foro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'g', component: Test1Component},
{ path: 'coffee', component: Test2Component },
{ path: 'foro' , component:ForoComponent},
{ path: '**', component: PageNotFoundComponent },
];
