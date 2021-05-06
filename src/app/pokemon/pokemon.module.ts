import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonResolver } from 'src/shared/resolvers/pokemon.resolver';
import { ApiService } from 'src/shared/services/api.service';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListModule,
    DetailModule,
  ],
  providers: [
    ApiService,
    PokemonResolver,
  ]
})
export class PokemonModule { }
