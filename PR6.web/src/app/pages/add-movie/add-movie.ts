
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {
  submitted = false;

  title = '';
  director = '';
  description = '';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  addMovie(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movieService.addItem({
      title: this.title,
      director: this.director,
      description: this.description
    });

    form.resetForm();
    this.submitted = false;

    this.router.navigate(['/movies']);
  }
}
