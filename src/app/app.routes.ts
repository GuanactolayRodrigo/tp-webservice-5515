import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas';
import { AutosComponent } from './components/autos/autos';
import { ConversorComponent } from './components/conversor/conversor';
import { AudioComponent } from './components/audio/audio';


export const routes: Routes = [
    {
        path: 'Top100Peliculas', component: PeliculasComponent
    },
    {
        path: 'Autos', component: AutosComponent
    },
    {
        path: 'Conversor', component: ConversorComponent
    },
    {
        path: 'Text-to-Audio', component: AudioComponent
    }
];
