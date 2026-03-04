import { useParams, Link } from "react-router-dom";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";

export default function PokemonDetailPage() {
    const { name } = useParams();
    const { data, loading, error } = usePokemonDetail(name!);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;

    return (
        <div>
            <Link to="/">← Back</Link>

            <h1>{data.name}</h1>
            <img src={data.sprites.front_default} alt={data.name} />

            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>

            <h3>Types</h3>
            <ul>
                {data.types.map((t) => (
                    <li key={t.type.name}>{t.type.name}</li>
                ))}
            </ul>

            <h3>Abilities</h3>
            <ul>
                {data.abilities.map((a) => (
                    <li key={a.ability.name}>{a.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}