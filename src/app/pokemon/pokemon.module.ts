import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { PokemonResolver } from 'src/shared/resolvers/pokemon.resolver';
import { ApiService } from 'src/shared/services/api.service';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    PokemonResolver,
  ]
})
export class PokemonModule { }
