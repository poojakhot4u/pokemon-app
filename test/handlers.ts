import { rest } from "msw";

export const handlers = [
    rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
        return res(
            ctx.json({
                results: [
                    { name: "bulbasaur", url: "url1" },
                    { name: "charmander", url: "url2" },
                ],
            })
        );
    }),

    rest.get("https://pokeapi.co/api/v2/pokemon/:name", (req, res, ctx) => {
        return res(
            ctx.json({
                name: "bulbasaur",
                height: 7,
                weight: 69,
                sprites: { front_default: "image.png" },
                types: [{ type: { name: "grass" } }],
                abilities: [{ ability: { name: "overgrow" } }],
            })
        );
    }),
];