import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("Category tests", () => {
  test("It should render a Spinner if isLoading is true", () => {
    // Mock window.scrollTo
    const originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();

    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();

    // Restore the original window.scrollTo after the test
    window.scrollTo = originalScrollTo;
  });

  test("It should render products from Category and NO Spinner if isLoading is false and there are items present", () => {
    // Mock window.scrollTo
    const originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();

    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "mens",
              items: [
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" },
              ],
            },
          ],
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    const productElement = screen.getByText(/product 1/i);
    expect(productElement).toBeInTheDocument();

    // Restore the original window.scrollTo after the test
    window.scrollTo = originalScrollTo;
  });
});
