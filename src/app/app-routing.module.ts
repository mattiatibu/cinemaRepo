import { DetailsComponent } from './components/movie/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'cinema', component:MovieComponent},
  { path: 'informazioni/:_id', component:DetailsComponent},
  { path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
