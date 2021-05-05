import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokemonListHttpResponse } from 'src/shared/interfaces/pokemon';
import { ApiService } from 'src/shared/services/api.service';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { Pokemon } from 'src/shared/models/pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  data$: Observable<Pokemon[]>;
  fetchData = new Subject<PokemonListHttpResponse>();

  pagination: any = {
    count: 0,
    limit: 19,
    offset: 19,
    search: '',
    total: 0,
  };

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.handleRequest();
  }

  private handleRequest(): void {
    this.data$ = this.fetchData.pipe(
      startWith([]),
      switchMap(() => this.api.getAll()),
      tap(data => this.pagination.total = data.length)
    );
  }

  public loadMore(): void {
    this.pagination.offset += this.pagination.limit;
  }

  public search(query: string) {
    this.pagination.search = query;
  }
}
