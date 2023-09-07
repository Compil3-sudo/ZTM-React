import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon tests", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageUrl: "testUrl", price: 10, quantity: 1 },
      { id: 2, name: "Item B", imageUrl: "testUrl", price: 10, quantity: 2 },
    ];

    const expectedQuantity = initialCartItems.reduce(
      (cartTotal, itemQuantity) => cartTotal + itemQuantity.quantity,
      0
    );

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
          totalQuantity: expectedQuantity,
        },
      },
    });

    const cartIconElement = screen.getByText(expectedQuantity);
    expect(cartIconElement).toBeInTheDocument();
  });
});
