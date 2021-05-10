import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pokemon/detail/detail.component';
import { PokemonResolver } from './../shared/resolvers/pokemon.resolver';
import { ListComponent } from './pokemon/list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  {
    path: '404', 
    component: NotFoundComponent,
  },
  {
    path: '**', 
    redirectTo: '/404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
