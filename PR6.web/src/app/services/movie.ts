
import { Injectable } from '@angular/core';

export interface Movie {
    id: number;
    title: string;
    director: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private movies: Movie[] = [
        {
            id: 1,
            title: 'Interstellar',
            director: 'Christopher Nolan',
            description: 'Науково-фантастичний фільм про космічну подорож для пошуку нового дому людства.'
        },
        {
            id: 2,
            title: 'Avatar',
            director: 'James Cameron',
            description: 'Фантастичний фільм про планету Пандора та її незвичайних мешканців.'
        },
        {
            id: 3,
            title: 'Inception',
            director: 'Christopher Nolan',
            description: 'Науково-фантастичний трилер про сни та проникнення у свідомість людини.'
        }
    ];

    getItems(): Movie[] {
        return this.movies;
    }

    getItemById(id: number): Movie | undefined {
        return this.movies.find(movie => movie.id === id);
    }

    addItem(movie: Omit<Movie, 'id'>): void {
        const newMovie: Movie = {
            id: this.movies.length > 0
                ? Math.max(...this.movies.map(movie => movie.id)) + 1
                : 1,
            ...movie
        };

        this.movies.push(newMovie);
    }
}
