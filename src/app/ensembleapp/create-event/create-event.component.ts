import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import { EventCreationDTO, EventDetailsDTO } from 'src/app/global/models/app.model';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  title: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]);
  summary: FormControl = new FormControl('', [Validators.maxLength(250)]);
  startDate: FormControl = new FormControl([Validators.required]);
  endDate: FormControl = new FormControl([Validators.required]);
  createEventForm: FormGroup = new FormGroup({
    title: this.title,
    summary: this.summary,
    startDate: this.startDate,
    endDate: this.endDate 
  });
  pendingEventCreation: boolean = false;

  unixStart: string = "";
  unixEnd: string = "";

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onStartDateChange():void {
    this.unixStart = new Date(this.startDate.value).toString();
  }

  onEndDateChange():void {
    this.unixEnd = new Date(this.endDate.value).toString();
  }

  createEvent(): void {
    if (this.createEventForm.valid && !this.pendingEventCreation && this.checkValidDates()) {
      this.pendingEventCreation = true;
      this.eventService.createEvent(this.createEventDTO()).subscribe(
        (res: EventDetailsDTO) => {
          this.pendingEventCreation = false;
          console.log(res);
          this.router.navigate(["event-details"]);
          
        }, (err) => {
          this.pendingEventCreation = false;
        }
      );
    } else {
      this.createEventForm.markAllAsTouched();
    }
  }

  private checkValidDates(): boolean {
    // I don't know what is going on here with datetime-local
    var startDate: string = this.startDate.value;
    var endDate: string = this.endDate.value;
    return (startDate.length > 1 && endDate.length > 1);
  }

  private createEventDTO(): EventCreationDTO {
    var startDate = new Date(this.startDate.value).valueOf();
    var endDate = new Date(this.endDate.value).valueOf();
    if (this.summary.value.length === 0 || this.summary.value == null) {
      this.summary.setValue("This event does not have a summary yet.");
    }
    const dto: EventCreationDTO = {
      title: this.title.value.trim(),
      summary: this.summary.value,
      startDate: startDate,
      endDate: endDate
    }
    return dto;
  }

}
