import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
 films:Movie[]=[];
 @Input() pagina:string;

 constructor(private moviesService:MoviesService,
  private activatedRoute:ActivatedRoute,
  private router:Router
  ) { }

 ngOnInit(): void {

   /*this.moviesService.getMovies().subscribe({
     next: (res) => {
       this.films=res;
     },
     error: (e) => {
       console.error(e);
     }
   })*/
   this.activatedRoute.params.subscribe((urlParams) => {
    const tipo:string=urlParams['type'];
    this.moviesService.getMovies().subscribe({
      next: (res) => {
        this.films=res;
        if(tipo!=='all'){
          this.films=this.films.filter((elem)=> elem.type===tipo);
        }

      },
      error: (e) => {
        console.error(e);
      }
    });




   })
 }
}
