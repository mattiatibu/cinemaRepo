import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    {id: 1,
    label: "Il gatto con gli stivali 2"},
    {id: 2,
    label: "Avatar 2"},
    {id: 3,
    label: "Vacanze al mare"}
  ];

  percorso= '../assets/images/carousel-';

  constructor() { }

  ngOnInit(): void {
  }

}
