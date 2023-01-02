import { MoviesService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Movie } from 'src/app/models/movie.model';
@Component({
  selector: 'app-nuovo-film',
  templateUrl: './nuovo-film.component.html',
  styleUrls: ['./nuovo-film.component.scss']
})
export class NuovoFilmComponent implements OnInit {

  editor= ClassicEditor;


editorConfig = {
  toolbar: {
      items: [
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'undo',
          'redo',
      ]
  },
  image: {
      toolbar: [
          'imageStyle:full',
          'imageStyle:side',
          '|',
          'imageTextAlternative'
      ]
  },
  table: {
      contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
      ]
  },
  height: 300,
};
  iconaChiudi=faClose;
  submitted=false;
  photos=["https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072__480.jpg",
    "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg",
    "https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767983__480.jpg"];
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    release_date: new FormControl('',[Validators.required]),
    length: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    photo1:new FormControl(this.photos[0],[Validators.required]),
    photo2:new FormControl(this.photos[1],[Validators.required]),
    photo3:new FormControl(this.photos[2],[Validators.required]),
    pubblica: new FormControl(false)

  }
  );
  constructor(private moviesService:MoviesService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
    const movie:Movie={
      title: this.form.value.title,
      description: this.form.value.description,
      image: this.form.value.image,
      release_date: this.form.value.release_date,
      length: Number(this.form.value.length),
      type: this.form.value.type,
      category: this.form.value.category,
      photos:[this.form.value.photo1,this.form.value.photo2,this.form.value.photo3],
      published:this.form.value.pubblica
    }
    this.moviesService.datiFilm.next(movie);

    this.moviesService.postMovie(movie).subscribe({
      next: (res) => {
        res = res;

      },
      error: (e) => {
        console.error(e);
      }
    });
    this.submitted=true;

    this.router.navigate(['films/all/mostra-nuovo']);
  }

  closeModal(){
    this.submitted=false;
    this.router.navigate(['/films/all']);
  }
  inserireAltro(){
    this.submitted=false;
    this.router.navigate(['films/all/nuovo-film']);
  }


}
