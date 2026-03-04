export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    results: PokemonListItem[];
}

export interface PokemonDetail {
    name: string;
    height: number;
    weight: number;
    abilities: {
        ability: { name: string };
    }[];
    types: {
        type: { name: string };
    }[];
    sprites: {
        front_default: string;
    };
}