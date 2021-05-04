export interface Pokemon {
    id: number;
    moves: any[],
    name: string;
    stats: any[],
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