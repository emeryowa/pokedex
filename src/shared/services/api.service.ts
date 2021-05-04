import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonHttpResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient,
  ) { }

  public get(): Observable<PokemonHttpResponse> {
    return this.http.get<PokemonHttpResponse>(`${this.BASE_URL}pokemon`);
  }
}
