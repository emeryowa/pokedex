import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonListHttpResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient,
  ) { }

  public get(url: string): Observable<PokemonListHttpResponse> {
    
    if (!url) {
      url = `${this.BASE_URL}pokemon`;
    }

    return this.http.get<PokemonListHttpResponse>(url);
  }

  public getPokemon(name: string | null): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.BASE_URL}pokemon/${name}`);
  }
}
