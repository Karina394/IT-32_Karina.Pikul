import { Injectable } from '@angular/core';

export class Movie {
    id: number;
    title: string;
    director: string;
    description: string;

    constructor(id: number, title: string, director: string, description: string) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.description = description;
    }
}

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    movies: Movie[] = [
        new Movie(1, 'Interstellar', 'Christopher Nolan', 'Науково-фантастичний фільм про космос'),
        new Movie(2, 'Inception', 'Christopher Nolan', 'Фільм про сни та підсвідомість'),
        new Movie(3, 'Avatar', 'James Cameron', 'Фантастичний фільм про планету Пандора')
    ];

    getItems() {
        return this.movies;
    }

    getItemById(id: number) {
        return this.movies.find(movie => movie.id === id);
    }

    addItem(movie: Movie) {
        movie.id = this.movies.length > 0
            ? Math.max(...this.movies.map(item => item.id)) + 1
            : 1;

        this.movies.push(movie);
    }
}