import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { server } from "../../../test/server";
import PokemonDetailPage from "./PokemonDetailPage";
import { http, HttpResponse } from "msw";

const BASE_URL = "https://pokeapi.co/api/v2";

describe("PokemonDetailPage", () => {
    test("shows loading state initially", () => {
        render(
            <MemoryRouter initialEntries={["/pokemon/bulbasaur"]}>
                <Routes>
                    <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("renders pokemon details", async () => {
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

    test("shows error state when API fails", async () => {



        server.use(
            http.get(`${BASE_URL}/pokemon/:name`, () => {
                return new HttpResponse(null, { status: 500 });
            })
        );
        render(
            <MemoryRouter initialEntries={["/pokemon/bulbasaur"]}>
                <Routes>
                    <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    });
});