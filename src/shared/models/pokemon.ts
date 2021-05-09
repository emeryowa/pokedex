import { IPokemon, IPokemonSprite } from "../interfaces/pokemon";

export class Pokemon {
    id: number;
    name: string;
    caught?: boolean;
    favorited?: boolean;
    moves?: any[];
    sprites?: PokemonSprite|any;
    stats?: any[];

    constructor(options: IPokemon) {
        this.id = options.id;
        this.name = options.name;
        this.caught = options.caught ?? false;
        this.favorited = options.favorited ?? false;
        this.moves = options.moves ?? [];
        this.sprites = new PokemonSprite(options.sprites ?? {});
        this.stats = options.stats ?? [];
    }
}

export class PokemonSprite {
    front_shiny: string;

    constructor(options: IPokemonSprite) {
        this.front_shiny = options.front_shiny ?? '';
    }
}