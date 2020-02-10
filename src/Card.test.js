// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
require("@testing-library/jest-dom/extend-expect");
const { render } = require("@testing-library/svelte");

const Card = require("./Card");

test("shows proper pokemonm name", () => {
  const { getByTestId } = render(Card, {
    name: "Bulbasaur",
    description: "Bulbasaur"
  });

  expect(getByTestId("banana")).toHaveTextContent("Name: Bulbasaur");
});

test("show the description", () => {
  const { getByTestId } = render(Card, {
    name: "Bulbasaur",
    description: "A pokemon description"
  });

  expect(getByTestId("card-description")).toHaveTextContent(
    "A pokemon description"
  );
});

// Note: This is as an async test as we are using `fireEvent`
// test("changes button text on click", async () => {
//   const { getByText } = render(Comp, { name: "World" });
//   const button = getByText("Button");

//   // Using await when firing events is unique to the svelte testing library because
//   // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
//   await fireEvent.click(button);

//   expect(button).toHaveTextContent("Button Clicked");
// });
