import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { tap, shareReplay } from 'rxjs/operators'
import { CookieService } from "ngx-cookie-service";
import { PersonCreationDTO } from "src/app/global/models/app.model";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
     
    constructor(private http: HttpClient,
        private cookieService: CookieService) {
    }

    private apiServerUrl = environment.apiBaseUrl;
      
    public login(email:string, password:string) {
        return this.http.post(this.apiServerUrl + '/login', {email: email, password: password})
            .pipe(tap(res => this.setSession(res)), shareReplay());
    }

    public register(personCreationDTO: PersonCreationDTO): Observable<any> {
        return this.http.post(this.apiServerUrl + '/person/register', personCreationDTO)
            .pipe(shareReplay());
    }

    // Subsequent methods are for auth utilities
    private setSession(res: any) {
        const expiresAt = Date.now() + 7200000; // 2hours for access token expiration time

        this.cookieService.set('auth_token', res.access_token);
        this.cookieService.set(('expires_at'), JSON.stringify(expiresAt.valueOf()));
    }

    public logout() {
        this.cookieService.delete('auth_token');
        this.cookieService.delete('expires_at');
    }

    public isLoggedIn() {
        return (Date.now() < this.getExpiration());
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    private getExpiration() {
        const expiration = this.cookieService.get("expires_at");
        const expiresAt = parseInt(expiration);
        return expiresAt;
    }
}