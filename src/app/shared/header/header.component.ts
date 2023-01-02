import { Router } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/services/movie.service';

import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,DoCheck {
  isCollapsed = true;

  user:any;
  testo:string;

  title = 'film-futuri';
  homeIcon= faHome;
  cinemaIcon= faFilm;
  tvIcon=faTv;
  trailerIcon=faCamera;
  searchIcon=faSearch;
  userIcon=faUser;
  iconaNuovo=faPlus;
  logoutIcon=faDoorOpen;
  profileIcon=faAddressBook;
  allIcon=faVideo;

  constructor(public authService:AuthService,
    private router:Router,
    private modalService:NgbModal,
    private moviesService:MoviesService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')!) != null){
      this.user=JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  cerca(){
    this.moviesService.ricerca.next(this.testo);
    this.router.navigate(['/films/all/risultati'])
  }

  open(content: any,azioneDaEseguire?:string){

    this.modalService.open(content, {ariaLabelledBy:'modal-basic-title', size:'lg', centered:true}).result.then((res)=>{
      //console.log("azione da eseguire");
      if(azioneDaEseguire==='esci'){
        this.logout();
      }
      if(azioneDaEseguire==='accedi'){

      }
    }).catch((res)=>{
      //console.log('nessuna azione da eseguire')
    })
  }
}
