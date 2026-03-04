import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "../services/pokemonApi";
import type { PokemonDetail } from "../types/pokemon";

export function usePokemonDetail(name: string) {
    const [data, setData] = useState<PokemonDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function load() {
            try {
                const result = await fetchPokemonDetail(name);
                if (isMounted) {
                    setData(result);
                }
            } catch (err) {
                if (isMounted) {
                    setError("Something went wrong");
                }
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
    }, [name]);

    return { data, loading, error };
}