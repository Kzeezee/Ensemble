import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { RemoveclassService } from '../removeclass/removeclass.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // @ViewChild('concernedDiv') concernedDiv!: ElementRef;

  // constructor(/*private removeclassService: RemoveclassService*/) {}

  inverseBoolean!: boolean;
  transpBoolean!: boolean;

  constructor(private router:Router) {
    router.events.forEach((event) => {
      if(this.router.url == "/content/ourstory") {
        if(event instanceof NavigationEnd) {
          console.log(this.router.url);
          this.inverseBoolean = true;
          this.transpBoolean = false;
        }
      }
      if(this.router.url == "/content/home") {
        if(event instanceof NavigationEnd) {
          console.log(this.router.url);
          this.inverseBoolean = false;
          this.transpBoolean = true;
        }
      }
    });
  }

  ngOnInit(): void {}


}
