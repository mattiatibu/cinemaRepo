import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  films:Movie[]=[];

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({
      next: (res) => {
        this.films=res;
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

}
