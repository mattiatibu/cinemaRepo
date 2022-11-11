import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieCardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
