import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPokemon } from '../interfaces/pokemon';
import { PokemonListHttpResponse } from '../interfaces/pokemon';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient,
  ) { }

  public getAll() {
    return this.http.get<PokemonListHttpResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200').pipe(
      map(data => data.results.map(pokemon => {
        const id = pokemon.url.split('/').slice(-2)[0] ?? '';
        return new Pokemon({
          'id': parseInt(id),
          'name': pokemon.name
        });
      }))
    )
  }

  public get(url: string): Observable<PokemonListHttpResponse> {
    
    if (!url) {
      url = `${this.BASE_URL}pokemon`;
    }

    return this.http.get<PokemonListHttpResponse>(url);
  }

  public getPokemon(name: string | null): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.BASE_URL}pokemon/${name}`);
  }
}
