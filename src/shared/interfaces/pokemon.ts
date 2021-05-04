export interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export interface PokemonHttpResponse {
    count: number;
    next: string|null;
    previous: string|null;
    results: Pokemon[];
}

export interface PokemonListHttpResponse {
    count: number;
    next: string|null;
    previous: string|null;
    results: Pokemon[];
}