import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/shared/interfaces/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data.pokemon;
    console.log(this.route.snapshot.data.pokemon);
  }

}
