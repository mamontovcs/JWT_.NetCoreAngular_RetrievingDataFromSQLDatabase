import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Token} from '../models/token';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AUTH_API_URL} from '../app-injection-tokens';
import {JwtHelperService} from '@auth0/angular-jwt';

export const ACCESS_TOKEN_KEY = 'AccountsAnswersToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              @Inject(AUTH_API_URL) private apiUrl: string,
              private jwtHelper: JwtHelperService,
              private router: Router) {
  }

  login(email: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}login`, {
      email, password
    }).pipe(
      tap(token => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    return token && !this.jwtHelper.isTokenExpired((token));
  }

  isAdmin(): boolean {

    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    let isAdmin = false;

    if (token != null) {
      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      isAdmin = decodedJwtData.role === 'Admin';
    }

    return isAdmin;
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['']);
  }
}
