import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from 'src/app/services/movie.service';
import * as moment from 'moment';

@Component({
  selector: 'app-mostra-nuovo',
  templateUrl: './mostra-nuovo.component.html',
  styleUrls: ['./mostra-nuovo.component.scss']
})
export class MostraNuovoComponent implements OnInit {

  iconaChiudi=faClose;
  title: string;
  description: string;
  category:string;
  image: string;
  release_date: string;
  length: string;
  type: string;
  dataUscita:any;
  constructor(private router:Router, private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.riceviDatiFilm();
  }

  riceviDatiFilm(){
    this.moviesService.datiFilm.subscribe((res:any)=>{
      this.title=res.title;
      this.description=res.description;
      this.image=res.image;
      this.category=res.category;
      this.length=res.length;
      this.release_date=res.release_date;
      this.type=res.type;
      this.dataUscita=moment(this.release_date).locale('it').format('DD MMMM YYYY');

    })
  }

  closeModal(){
    this.router.navigate(['films/all']);
  }
  inserireAltro(){
    this.router.navigate(['films/all/nuovo-film']);
  }

}
