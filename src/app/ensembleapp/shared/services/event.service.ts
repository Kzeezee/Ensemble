import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { tap, shareReplay } from 'rxjs/operators'
import { EventCreationDTO, EventDetailsDTO } from "src/app/global/models/app.model";
import { Observable } from "rxjs";

@Injectable()
export class EventService {
     
    constructor(private http: HttpClient) {
    }

    private apiServerUrl = environment.apiBaseUrl;
      
    public createEvent(eventCreationDTO: EventCreationDTO): Observable<any> {
        return this.http.post(this.apiServerUrl + '/event/create-event', eventCreationDTO);
    }

    // public register(personCreationDTO: PersonCreationDTO): Observable<any> {
    //     return this.http.post(this.apiServerUrl + '/person/register', personCreationDTO)
    //         .pipe(shareReplay());
    // }
}