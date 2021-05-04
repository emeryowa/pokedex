export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonHttpResponse {
    count: number;
    next: string|null;
    previous: string|null;
    results: Pokemon[];
}