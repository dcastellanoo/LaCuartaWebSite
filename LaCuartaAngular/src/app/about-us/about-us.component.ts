import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  carousel_images: string[] = [
    "./assets/images/terraza.jpg",
    "./assets/images/background.jpg",
    "./assets/images/terraza-noche.png"
  ];

  constructor( ) {
  }

  ngOnInit(): void {
  }

}
