import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  tipo:string;
  colore:string;

  constructor(private moviesService:MoviesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

   ngOnInit(): void {
     this.activatedRoute.params.subscribe((urlParams) => {

      this.tipo=urlParams['type'];

    })
  }

  cambiaStile(){
    switch(this.tipo){
      case 'cinema':

        break;
      case 'piattaforme digitali':
        break;
      case 'all':
        break;
    }
  }
}

