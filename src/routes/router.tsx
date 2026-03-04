import { createBrowserRouter } from "react-router-dom";
import PokemonListPage from "../features/pokemon-list/PokemonListPage";
import PokemonDetailPage from "../features/pokemon-detail/PokemonDetailPage";

export const router = createBrowserRouter([
    { path: "/", element: <PokemonListPage /> },
    { path: "/pokemon/:name", element: <PokemonDetailPage /> },
]);