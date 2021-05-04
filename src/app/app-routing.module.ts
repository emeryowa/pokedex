import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pokemon/detail/detail.component';
import { PokemonResolver } from './../shared/resolvers/pokemon.resolver';

const routes: Routes = [
  {
    path: 'pokemon/:name',
    component: DetailComponent,
    resolve: {
      pokemon: PokemonResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
