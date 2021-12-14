import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarService } from './shared/services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ensemble';

  constructor(
    private http: HttpClient,
    private carSerivce: CarService
  ) {}

  // public buttonPress() {
  //   this.carSerivce.getSample().subscribe(
  //     (response: String) => {
  //       console.log(response);
  //     }, (err) => {
  //       console.log(err)
  //     }
  //   )
  // }
}
