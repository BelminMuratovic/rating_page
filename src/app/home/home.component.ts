import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  theatreMovies: any[] = [];
  popularMovies: any[] = [];
  displayedTrendingMovies: any[] = [];
  displayedTheatreMovies: any[] = [];
  displayedPopularMovies: any[] = [];
  numberOfMoviesToShow = 4;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.getTrendingMovies().subscribe((data: any) => {
      this.trendingMovies = data;
      this.displayedTrendingMovies = this.trendingMovies.slice(
        0,
        this.numberOfMoviesToShow
      );
    });

    this.auth.getTheatreMovies().subscribe((data: any) => {
      this.theatreMovies = data;
      this.displayedTheatreMovies = this.theatreMovies.slice(
        0,
        this.numberOfMoviesToShow
      );
    });

    this.auth.getPopularMovies().subscribe((data: any) => {
      this.popularMovies = data;
      this.displayedPopularMovies = this.popularMovies.slice(
        0,
        this.numberOfMoviesToShow
      );
    });
  }

  showAllTrendingMovies() {
    this.displayedTrendingMovies = this.trendingMovies;
  }

  showAllTheatreMovies() {
    this.displayedTheatreMovies = this.theatreMovies;
  }

  showAllPopularMovies() {
    this.displayedPopularMovies = this.popularMovies;
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
