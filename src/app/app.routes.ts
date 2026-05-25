import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas';
import { AutosComponent } from './components/autos/autos';
import { ConversorComponent } from './components/conversor/conversor';
import { AudioComponent } from './components/audio/audio';
import { BuscadorMusicaComponent } from './components/buscador-musica/buscador-musica';
import { HomeComponent } from './components/layout/home/home';


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
        path: 'Text-A-Audio', component: AudioComponent
    },
    {
        path: 'Buscador-Musica', component: BuscadorMusicaComponent
    },
    {
        path: 'Home', component: HomeComponent
    }
];
