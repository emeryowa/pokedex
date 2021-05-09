import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonResolver } from '@app/resolvers/pokemon.resolver';
import { ApiService } from '@app/services/api.service';
import { DetailComponent } from './detail.component';
import { MovesComponent } from './moves/moves.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    DetailComponent,
    MovesComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    PokemonResolver,
  ]
})
export class DetailModule { }
