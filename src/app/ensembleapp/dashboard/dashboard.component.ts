import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public carService: CarService
  ) { }

  ngOnInit(): void {
    this.carService.getAllPerson().subscribe();
  }

}
