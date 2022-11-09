import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../mocks/movies.mocks';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies():Observable<Movie[]>{
    return of(MOVIES);

  }
}
