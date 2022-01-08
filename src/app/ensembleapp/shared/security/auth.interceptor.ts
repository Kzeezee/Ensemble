import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators'
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private cookieService: CookieService,
        private authService: AuthService,
        private router: Router
    ) {}

    // Intercepts all HTTP requests to append JWT cookie. If cookie expired, clear cookie and redirect to login.
    // May have to modify as Unauthorized 401 may appear despite being login due to different roles and permissions.
    // Also still need to implement refresh tokens.
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.cookieService.get("auth_token");

        if (authToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + authToken
                }
            });
        }

        return next.handle(req).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 403) {
                        this.authService.logout();
                        this.router.navigate(["/content/login"]);
                    }
                }
                return throwError(error);
            }
            )
        )
    }
}