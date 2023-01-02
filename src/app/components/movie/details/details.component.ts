import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import * as moment from 'moment'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  film:Movie;
  dataUscita:any;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetMovie();
  }

  onGetMovie():void {
    const id= this.activatedRoute.snapshot.paramMap.get('_id');

    this.moviesService.getMovie(id).subscribe({
      next: (res) => {
        this.film=res;
        console.log(this.film);
        this.dataUscita=moment(this.film.release_date).locale('it').format('DD MMMM YYYY');

      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
