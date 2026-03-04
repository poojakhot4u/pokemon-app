const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(): Promise<any> {
    const response = await fetch(`${BASE_URL}/pokemon?limit=50`);

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon list");
    }

    return response.json();
}

export async function fetchPokemonDetail(name: string): Promise<any> {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon detail");
    }

    return response.json();
}