import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("Product Card tests", () => {
  test("It should add the product item when Product Card button is clicked", async () => {
    const mockProduct = {
      id: 1,
      name: "Item A",
      imageUrl: "testUrl",
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
            totalQuantity: 0,
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
    expect(store.getState().cart.totalQuantity).toBe(1);
  });
});
