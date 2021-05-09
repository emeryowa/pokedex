import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokemonListHttpResponse } from '@app/interfaces/pokemon';
import { ApiService } from '@app/services/api.service';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { Pokemon } from '@app/models/pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  data$: Observable<Pokemon[]>;
  fetchData = new Subject<PokemonListHttpResponse>();

  pagination: any = {
    count: 19,
    limit: 19,
    offset: 19,
    page: 1,
    search: '',
    total: 0,
  };

  isCaughtFilterActive: boolean = false;
  isFavoriteFilterActive: boolean = false;

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
    this.pagination.offset += this.pagination.limit + 1;
    this.pagination.page += 1;
    this.pagination.count = this.pagination.page * this.pagination.limit + (this.pagination.page - 1);
  }

  public search(query: string) {
    this.pagination.search = query;
  }
}
