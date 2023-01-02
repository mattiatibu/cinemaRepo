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
 @Input() paginazione:boolean;


 page=1;
 filmPerPagina=4;
 constructor(private moviesService:MoviesService,
  private activatedRoute:ActivatedRoute,
  private router:Router
  ) { }

 ngOnInit(): void {
  console.log("type");
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
        if(this.pagina==='films'){
          if(tipo!=='all'){
            this.films=this.films.filter((elem)=> elem.type===tipo);
          }
        }else{
          this.films=this.films.filter((elem)=> elem.type===this.pagina).slice(0,4);
        }

      },
      error: (e) => {
        console.error(e);
      }
    });




   })
 }

 paginate(event){
  event.page =event.page + 1;
  this.page = event.page;
  this.filmPerPagina=event.rows;
  }
}
