import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }

    signUpUser(user: User): Observable<any> {
        return this.http.post('http://localhost:8080/api/auth/signup', user);
    }

    signInUser(user: User): Observable<any> {
        return this.http.post('http://localhost:8080/api/auth/signin', user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/inicio']);
    }

    getToken() {
        return localStorage.getItem('token');
    }
}