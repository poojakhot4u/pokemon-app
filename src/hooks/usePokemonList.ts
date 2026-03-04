import { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/pokemonApi";
import type { PokemonListItem } from "../types/pokemon";

export function usePokemonList() {
    const [data, setData] = useState<PokemonListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function load() {
            try {
                const result = await fetchPokemonList();
                if (isMounted) {
                    setData(result.results);
                }
            } catch (err) {

            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, loading, error };
}