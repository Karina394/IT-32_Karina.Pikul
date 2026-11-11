
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService, Movie } from '../../services/movie';

@Component({
  selector: 'app-movies-detail',
  imports: [RouterLink],
  templateUrl: './movies-detail.html',
  styleUrl: './movies-detail.css'
})
export class MoviesDetail {
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
