import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: 'components/get-start', component: ComponentsComponent
  },
  {
    path: 'components/:component/demo', component: ComponentsComponent
  },
  { path: '', redirectTo: '/components/get-start', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
