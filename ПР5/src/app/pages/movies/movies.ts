import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-movies',
  styleUrl: './movies.css',
  templateUrl: './movies.html',
})
export class Movies {
  movies;

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getItems();
  }
}