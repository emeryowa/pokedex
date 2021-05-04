import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Pokemon } from "../interfaces/pokemon";
import { ApiService } from "../services/api.service";

@Injectable({ providedIn: 'root' })

export class PokemonResolver implements Resolve<Pokemon> {

  constructor(private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pokemon>|Promise<any>|any {
    return this.api.getPokemon(route.paramMap.get('name'));
  }
}