import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonHttpResponse } from 'src/shared/interfaces/pokemon';
import { ApiService } from 'src/shared/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  data$: Observable<PokemonHttpResponse>;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.data$ = this.api.get();
  }
}
