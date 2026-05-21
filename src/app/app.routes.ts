import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas';
import { AutosComponent } from './components/autos/autos';

export const routes: Routes = [
    {
        path: 'Top100Peliculas', component: PeliculasComponent
    },
    {
        path: 'Autos', component: AutosComponent
    }
];
