import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";
import { useState } from "react";
import { fireEvent, userEvent } from "@storybook/test";
import { TState } from "./Button.model";

describe("Кнопка", () => {
  render(<Button />);
  const button = screen.getByTestId("mybutton");

  it("должна быть в документе", () => {
    expect(button).toBeInTheDocument();
  });

  it("имеет класс button", () => {
    expect(button).toHaveClass("button");
  });

  it("не должна быть отключена", () => {
    expect(button).not.toBeDisabled();
  });

  it("должна быть отключена", () => {
    render(<Button state="disabled" />);
    const button = screen.getByTestId("mybutton");
    expect(button).toBeDisabled();
  });

  it("контент должен быть невидимым", () => {
    render(<Button state="loading" />);
    const content = screen.getByTestId("mybutton-content");
    expect(content).toHaveStyle("opacity: 0%");
  });

  it("должна быть сфокусирована", () => {
    render(<Button />);
    const button = screen.getByTestId("mybutton");
    button.focus();
    expect(button).toHaveFocus();
  });
});
