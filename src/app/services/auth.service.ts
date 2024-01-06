import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  login(username: string, password: string) {
    if (username === 'Belmin' && password === '1111') return 200;
    else return 403;
  }

  logout() {
    this.router.navigate(['login']);
  }

  getTrendingMovies(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:4200/assets/data/trending-movies.json'
    );
  }

  getTheatreMovies(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:4200/assets/data/theatre-movies.json'
    );
  }

  getPopularMovies(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:4200/assets/data/popular-movies.json'
    );
  }
}
