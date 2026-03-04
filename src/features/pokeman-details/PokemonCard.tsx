import { Link } from "react-router-dom";
import type { PokemonListItem } from "../../types/pokemon";
interface Props {
    pokemon: PokemonListItem;
}

export default function PokemonCard({ pokemon }: Props) {
    return (
        <Link to={`/pokemon/${pokemon.name}`}>
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "12px",
                    borderRadius: "8px",
                    textAlign: "center",
                }}
            >
                {pokemon.name}
            </div>
        </Link>
    );
}