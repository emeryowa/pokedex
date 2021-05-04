import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokemonListHttpResponse } from 'src/shared/interfaces/pokemon';
import { ApiService } from 'src/shared/services/api.service';
import { startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  data$: Observable<PokemonListHttpResponse>;
  fetchData = new Subject<PokemonListHttpResponse>();
  pagination: any = {
    count: 0,
    next: '',
    prev: '',
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
      switchMap(() => this.api.get(this.pagination.next)),
      tap(data => {
        this.pagination.count = data.count;
        this.pagination.next = data.next;
        this.pagination.prev = data.previous;
      })
    );
  }

  public paginate(to: 'next' |'prev'): void {
    this.fetchData.next();
  }
}
