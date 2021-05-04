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

  public get(url: string): Observable<PokemonHttpResponse> {
    
    if (!url) {
      url = `${this.BASE_URL}pokemon`;
    }

    return this.http.get<PokemonHttpResponse>(url);
  }
}
