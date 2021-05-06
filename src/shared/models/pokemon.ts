import { IPokemon } from "../interfaces/pokemon";

export class Pokemon {
    id: number;
    name: string;
    caught: boolean;
    favorited: boolean;

    constructor(options: IPokemon) {
        this.id = options.id;
        this.name = options.name;
        this.caught = options.caught ?? false;
        this.favorited = options.favorited ?? false;
    }
}