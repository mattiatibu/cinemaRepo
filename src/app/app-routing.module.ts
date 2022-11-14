import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';
import { DetailsComponent } from './components/movie/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  //{ path: 'all', component:MovieComponent}
  { path: 'all/:type', component:MovieComponent,children: [
    { path: 'informazioni/:category/:title/:_id', component:DetailsComponent},
    { path: '', pathMatch:'full',component:MoviesListComponent}
  ]},
  { path: '**', redirectTo:'home'}
];
//{ path: 'cinema', component:MovieComponent},
//{ path: 'informazioni/:_id', component:DetailsComponent},
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
