import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'film-futuri';
  homeIcon= faHome;
  cinemaIcon= faFilm;
  tvIcon=faTv;
  trailerIcon=faCamera;
  searchIcon=faSearch;
  images = [
    {id: 1,
    label: "Il gatto con gli stivali 2"},
    {id: 2,
    label: "Avatar 2"},
    {id: 3,
    label: "Vacanze al mare"}
  ];

  percorso= '../assets/images/carousel-';
}
