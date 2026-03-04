import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PokemonDetailPage from "./PokemonDetailPage";

describe("PokemonDetailPage", () => {
    test("renders pokemon detail", async () => {
        render(
            <MemoryRouter initialEntries={["/pokemon/bulbasaur"]}>
                <Routes>
                    <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(await screen.findByText("bulbasaur")).toBeInTheDocument();
        expect(await screen.findByText(/height/i)).toBeInTheDocument();
        expect(await screen.findByText("grass")).toBeInTheDocument();
        expect(await screen.findByText("overgrow")).toBeInTheDocument();
    });
});