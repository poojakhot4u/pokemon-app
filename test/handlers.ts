import { http, HttpResponse } from "msw";

const BASE_URL = "https://pokeapi.co/api/v2";

export const handlers = [
    http.get(`${BASE_URL}/pokemon`, () => {
        return HttpResponse.json({
            results: [
                { name: "bulbasaur", url: "url1" },
                { name: "charmander", url: "url2" },
            ],
        });
    }),

    http.get(`${BASE_URL}/pokemon/:name`, () => {
        return HttpResponse.json({
            name: "bulbasaur",
            height: 7,
            weight: 69,
            sprites: { front_default: "image.png" },
            types: [{ type: { name: "grass" } }],
            abilities: [{ ability: { name: "overgrow" } }],
        });
    }),
];