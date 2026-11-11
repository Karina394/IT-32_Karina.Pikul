import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Movies } from './pages/movies/movies';
import { MoviesDetail } from './pages/movies-detail/movies-detail';
import { AddMovie } from './pages/add-movie/add-movie';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'movies', component: Movies },
    { path: 'movies/add', component: AddMovie },
    { path: 'movie/:id', component: MoviesDetail },
    { path: '**', redirectTo: '' }
];