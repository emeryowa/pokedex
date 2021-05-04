import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { PokemonResolver } from 'src/shared/resolvers/pokemon.resolver';
import { ApiService } from 'src/shared/services/api.service';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    ListModule,
  ],
  providers: [
    ApiService,
    PokemonResolver,
  ]
})
export class PokemonModule { }
