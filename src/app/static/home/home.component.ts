import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      let element = document.querySelector('.navBar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('inverse');
      } else {
        element.classList.remove('inverse');
      }
    }

}
