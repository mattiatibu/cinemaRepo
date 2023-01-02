import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../mocks/movies.mocks';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiBaseUrl="api/movies";

  datiFilm=new ReplaySubject();
  ricerca= new ReplaySubject();
  constructor(private http:HttpClient) { }

  getMovies():Observable<Movie[]>{
    //return of(MOVIES);
    return this.http.get<Movie[]>(`${this.apiBaseUrl}/`);

  }

  getMovie(id:string):Observable<Movie>{
    //const movie = MOVIES.find(movie => movie._id === id);
    //return of (movie)
    return this.http.get<Movie>(`${this.apiBaseUrl}/${id}`);
  }

  postMovie(form:any):Observable<any>{
    //return of(MOVIES);
    return this.http.post(`${this.apiBaseUrl}/`,form);
  }

  searchMovies(testo:string){
    return this.http.get<Movie[]>(`${this.apiBaseUrl}/cerca/${testo}`);
  }
}
