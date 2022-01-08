import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class CarService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getSample(): Observable<any> {
        return this.http.get(this.apiServerUrl + "/car", {responseType: 'text'});
    }

    public getAllPerson(): Observable<any> {
        return this.http.get(this.apiServerUrl + "/person/get-all");
    }
}