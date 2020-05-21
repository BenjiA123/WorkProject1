import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'grid', component: GridComponent, data: { text: 'grid' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
