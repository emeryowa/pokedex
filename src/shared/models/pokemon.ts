import { IPokemon } from "../interfaces/pokemon";

export class Pokemon {
    id: number;
    name: string;

    constructor(options: IPokemon) {
        this.id = options.id;
        this.name = options.name;
    }
}