import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoggedInGuard } from './logged-in.guard';

import { ProfileComponent } from './components/user/profile/profile.component';
import { MostraNuovoComponent } from './components/movie/mostra-nuovo/mostra-nuovo.component';
import { LoginComponent } from './components/user/login/login.component';
import { NuovoFilmComponent } from './components/movie/nuovo-film/nuovo-film.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';
import { DetailsComponent } from './components/movie/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { ResultComponent } from './components/movie/result/result.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  //{ path: 'all', component:MovieComponent}
  { path: 'films/:type', component:MovieComponent,children: [
    { path: 'informazioni/:category/:title/:_id', component:DetailsComponent},
    { path: 'risultati', component:ResultComponent},
    { path:'nuovo-film', component:NuovoFilmComponent, canActivate:[LoggedInGuard]},
    { path: 'mostra-nuovo', component:MostraNuovoComponent, canActivate:[LoggedInGuard]},
    { path: '', pathMatch:'full',component:MoviesListComponent}
  ]},
  { path: 'profilo', component:ProfileComponent, canActivate:[LoggedInGuard]},
  { path:'registrati', component:RegistrationComponent},
  { path: 'login',component:LoginComponent},
  { path: '**', redirectTo:'home'}
];
//{ path: 'cinema', component:MovieComponent},
//{ path: 'informazioni/:_id', component:DetailsComponent},
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
