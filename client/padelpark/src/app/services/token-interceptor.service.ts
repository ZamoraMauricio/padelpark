import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http'
import { AuthService } from './auth.service'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getToken();

        if (token) {
            const tokenizeReq = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            return next.handle(tokenizeReq);
        } else {
            return next.handle(req);
        }
    }
}