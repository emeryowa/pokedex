import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/shared/models/pokemon';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.sass']
})
export class TeaserComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  public catch() {
    this.pokemon.caught = !this.pokemon.caught;
  }

  public favorite() {
    this.pokemon.favorited = !this.pokemon.favorited;
  }

}
