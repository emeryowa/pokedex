import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pokemon/detail/detail.component';
import { PokemonResolver } from './../shared/resolvers/pokemon.resolver';
import { ListComponent } from './pokemon/list/list.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: ListComponent,
  },
  {
    path: 'pokemon/:name',
    component: DetailComponent,
    resolve: {
      pokemon: PokemonResolver,
    }
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
