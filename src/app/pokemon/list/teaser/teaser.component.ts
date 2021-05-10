import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '@app/models/pokemon';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.sass']
})
export class TeaserComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
  }

  public catch() {
    this.pokemon.caught = !this.pokemon.caught;

    this.api.update(this.pokemon.id, 'caught', this.pokemon.caught);
  }

  public favorite() {
    this.pokemon.favorited = !this.pokemon.favorited;
    
    this.api.update(this.pokemon.id, 'favorited', this.pokemon.favorited);

  }
}
