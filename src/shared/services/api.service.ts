import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IPokemon } from '../interfaces/pokemon';
import { PokemonListHttpResponse } from '../interfaces/pokemon';
import { Pokemon } from '../models/pokemon';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
  ) { }

  public getAll() {

    const cache = this.ls.get('pokemon_all');

    if (cache) {
      return of(cache);
    }

    return this.http.get<PokemonListHttpResponse>(`${this.BASE_URL}pokemon?limit=1200`).pipe(
      map(data => data.results.map(pokemon => {
        const id = pokemon.url.split('/').slice(-2)[0] ?? '';
        return new Pokemon({
          'id': parseInt(id),
          'name': pokemon.name
        });
      })),
      tap(data => this.ls.set('pokemon_all', data))
    )
  }

  public getPokemon(name: string | null): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.BASE_URL}pokemon/${name}`);
  }
}
