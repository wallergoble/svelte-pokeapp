// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
require("@testing-library/jest-dom/extend-expect");
const { render, wait } = require("@testing-library/svelte");
const App = require("./App");
jest.mock("./api.js");

const api = require("./api.js");

describe("app", () => {
  beforeEach(() => {
    console.log("api console log", api);

    api.getPokemons.mockResolvedValueOnce([
      {
        id: 1,
        name: "Bulbasaur",
        description:
          "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within. As mentioned in the anime, starter Pokémon are raised by Breeders to be distributed to new Trainers. Having been domesticated from birth, Bulbasaur is regarded as both a rare and well-behaved Pokémon. It is known to be extremely loyal, even after long-term abandonment. Bulbasaur has also shown itself to be an excellent caretaker, even having a special technique called the 'Bulba-by.' To perform this technique, Bulbasaur uses its vines to pick up a young Pokémon and soothingly rocks it in the air. It is found in grasslands and forests throughout the Kanto region. However, due to Bulbasaur's status as starter Pokémon, it is hard to come by in the wild and generally found under the ownership of a Trainer. It has been observed that a Bulbasaur's bulb will flash blue when it is ready to evolve. If it does not want to evolve, it struggles to resist the transformation. Many Bulbasaur gather every year in a hidden garden in Kanto to evolve into Ivysaur in a ceremony led by a Venusaur.",
        imageSrc: "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
        types: ["grass", "poison"],
        price: 50
      },
      {
        id: 2,
        name: "Charmander",
        description:
          "Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain. Charmander can be found in hot, mountainous areas. However, it is found far more often in the ownership of Trainers. As shown in Pokémon Snap, Charmander exhibits pack behavior, calling others of its species if it finds food.",
        imageSrc:
          "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/500px-004Charmander.png",
        types: ["fire"],
        price: 50
      }
    ]);
  });
  test("shows proper heading when rendered", () => {
    const { getByText } = render(App, { name: "waller" });

    expect(getByText("Pokemon")).toBeInTheDocument();
  });

  // Note: This is as an async test as we are using `fireEvent`
  test("has two cards after api call", async () => {
    const { getAllByTestId } = render(App);

    await wait(() => getAllByTestId("card-description"));

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.

    expect(getAllByTestId("card-description").length).toBe(2);
  });
});
