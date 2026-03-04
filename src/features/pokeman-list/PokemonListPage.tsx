import { useState, useMemo } from "react";
import { usePokemonList } from "../../hooks/usePokemonList";
import PokemonCard from "../pokeman-details/PokemonCard";

export default function PokemonListPage() {
    const { data, loading, error } = usePokemonList();
    const [search, setSearch] = useState("");

    const filteredPokemon = useMemo(() => {
        return data.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Pokémon List</h1>

            <input
                type="text"
                placeholder="Search Pokémon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: "16px",
                    marginTop: "20px",
                }}
            >
                {filteredPokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}