import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button (background color === white) when nothing is passed", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyleRule("background-color", "black");
  });

  test("should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyleRule("background-color", "#4285f4");
  });

  test("should render inverted button when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyleRule("background-color", "white");
  });

  test("should be disabled if isLoading is true", () => {
    render(<Button isLoading={true} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
