import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {} 

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      let nbElement = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > nbElement.clientHeight) {
        nbElement.classList.add('inverse');
      } else {
        nbElement.classList.remove('inverse');
      }

      let nlElement = document.querySelector('.navbar-nav') as HTMLElement;
      if (window.pageYOffset > nlElement.clientHeight) {
        nlElement.classList.add('inverse');
      } else {
        nlElement.classList.remove('inverse');
      }
    }
}
