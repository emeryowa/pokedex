import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IPokemon } from "../interfaces/pokemon";
import { ApiService } from "../services/api.service";

@Injectable({ providedIn: 'root' })

export class PokemonResolver implements Resolve<IPokemon> {

  constructor(private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPokemon>|Promise<any>|any {
    return this.api.getPokemon(route.paramMap.get('name'));
  }
}