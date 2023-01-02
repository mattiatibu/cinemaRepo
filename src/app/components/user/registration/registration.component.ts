import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { DataValidator } from './dataValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    birthdate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),Validators.required]),
    //ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl('', [Validators.required])

  },
  [DataValidator.NascitaValidator('birthdate')]
  );//inserire custom validator data

  constructor(private userService:UserService, private router:Router) { }
  //inserire metodo per validare data
  get convalidaData(){
    return (this.form.getError('invalid') && this.form.get('birthdate').touched);
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
    const utente={ nome: this.form.value.name,
                   cognome:this.form.value.surname,
                   email: this.form.value.email};
    this.userService.datiUtente.next(utente);
    this.userService.nuovoUtente(this.form.value).subscribe({
      next: (res)=> {
        console.log(res);
      },error:(err)=> console.log(err)
    })
    this.router.navigate(['home']);
  }


}
