import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '@app/services/api.service';
import { map, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  data$: Observable<any>;
  fetchData = new Subject();

  pagination: any = {
    count: 19,
    limit: 19,
    offset: 19,
    page: 1,
    search: '',
    total: 0,
  };

  showCaught: boolean = false;
  showFavorites: boolean = false;

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
      map((data: any) => {
        if (this.pagination.search) {
          data = data.filter(item => item.name.includes(this.pagination.search));
        }

        if (this.showFavorites) {
          data = data.filter(item => item.favorited);
        }

        if (this.showCaught) {
          data = data.filter(item => item.caught);
        }

        return data;
      }),
      tap(data => {
        this.pagination.total = data.length;
        this.pagination.count = this.pagination.total < this.pagination.limit ? this.pagination.total : this.pagination.limit;
      })
    );
  }

  public loadMore(): void {
    this.pagination.offset += this.pagination.limit + 1;
    this.pagination.page += 1;

    const count = this.pagination.page * this.pagination.limit + (this.pagination.page - 1);
    this.pagination.count = count >= this.pagination.total ? this.pagination.total : count;
  }

  public search(query: string) {
    this.pagination.search = query;
    this.fetchData.next();
  }

  public toggleWishList(): void {
    this.showFavorites = !this.showFavorites;
    this.showCaught = false;
    this.fetchData.next();
  }

  public toggleMyPokemon(): void {
    this.showCaught = !this.showCaught;
    this.showFavorites = false;
    this.fetchData.next();
  }
}
