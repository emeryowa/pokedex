export interface IPokemon {
    id: number;
    name: string;
    moves?: any[],
    stats?: any[],
    url?: string;
}

export interface PokemonHttpResponse {
    count: number;
    next: string|null;
    previous: string|null;
    results: IPokemon[];
}

export interface PokemonListHttpResponse {
    count: number;
    next: string|null;
    previous: string|null;
    results: any[];
}