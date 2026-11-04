import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieService, Movie } from '../../services/movie';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {
  submitted = false;

  movie: Movie = {
    id: 0,
    title: '',
    director: '',
    description: ''
  };

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  addItem(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movieService.addItem({ ...this.movie });

    form.resetForm();
    this.submitted = false;

    this.router.navigate(['/movies']);
  }
}