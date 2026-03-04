import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { server } from "../../../test/server";
import PokemonListPage from "./PokemonListPage";
import { http, HttpResponse } from "msw";

const BASE_URL = "https://pokeapi.co/api/v2";

describe("PokemonListPage", () => {
    test("shows loading state initially", () => {
        render(
            <MemoryRouter>
                <PokemonListPage />
            </MemoryRouter>
        );

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test("renders pokemon list", async () => {
        render(
            <MemoryRouter>
                <PokemonListPage />
            </MemoryRouter>
        );

        expect(await screen.findByText("bulbasaur")).toBeInTheDocument();
        expect(await screen.findByText("charmander")).toBeInTheDocument();
    });

    test("filters pokemon by name", async () => {
        render(
            <MemoryRouter>
                <PokemonListPage />
            </MemoryRouter>
        );

        await screen.findByText("bulbasaur");

        const input = screen.getByPlaceholderText(/search/i);
        await userEvent.type(input, "bulba");

        expect(screen.getByText("bulbasaur")).toBeInTheDocument();
        expect(screen.queryByText("charmander")).not.toBeInTheDocument();
    });

    test("shows error state when API fails", async () => {
            server.use(
                http.get("https://pokeapi.co/api/v2/pokemon*", () => {
                    return new HttpResponse(null, { status: 500 });
                })
            );

        render(
            <MemoryRouter>
                <PokemonListPage />
            </MemoryRouter>
        );

        expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    });
});