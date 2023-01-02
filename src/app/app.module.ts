import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {PaginatorModule} from 'primeng/paginator';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieComponent } from './components/movie/movie.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { DetailsComponent } from './components/movie/details/details.component';
import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { MostraDataComponent } from './components/mostra-data/mostra-data.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NuovoFilmComponent } from './components/movie/nuovo-film/nuovo-film.component';
import { ErrorComponent } from './shared/error/error.component';
import { LoginComponent } from './components/user/login/login.component';
import { MostraNuovoComponent } from './components/movie/mostra-nuovo/mostra-nuovo.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ResultComponent } from './components/movie/result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieCardComponent,
    DetailsComponent,
    MoviesListComponent,
    RegistrationComponent,
    MostraDataComponent,
    ContactsComponent,
    NuovoFilmComponent,
    ErrorComponent,
    LoginComponent,
    MostraNuovoComponent,
    ProfileComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DividerModule,
    PasswordModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    ToastModule,
    PaginatorModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
