import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetailPage from "./features/pokeman-details/PokemonDetailPage";
import PokemonListPage from "./features/pokeman-list/PokemonListPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage />} />
                <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}