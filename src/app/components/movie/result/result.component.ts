import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  films:Movie[];
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  onGetMovies(){
    this.moviesService.ricerca.subscribe(
      (res:any)=>{
        let testo=res;
        this.moviesService.searchMovies(testo).subscribe({
          next:(res)=>{
            this.films=res;
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
    )
  }
}
