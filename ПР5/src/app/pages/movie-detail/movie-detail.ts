import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../../services/movie';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.movie = this.movieService.getItemById(id);
    });
  }
}