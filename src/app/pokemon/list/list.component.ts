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

  data$: Observable<any>;
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
      switchMap(() => this.api.getAll()),
    );
  }

  public paginate(to: 'next' |'prev'): void {
    this.fetchData.next();
  }

  public search(query: string) {
    console.log(query);

  }
}
