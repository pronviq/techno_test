import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom/extend-expect";

describe("Счетчик", () => {
  render(<Counter size={24}>1</Counter>);
  const counter = screen.getByText(/1/i);

  test("должен быть в документе", () => {
    expect(counter).toBeInTheDocument();
  });

  test("должен иметь класс 'counter'", () => {
    expect(counter).toHaveClass("counter");
  });

  test("не должен быть отключен", () => {
    expect(counter).not.toBeDisabled();
  });

  test("children = 123 -> 99+", () => {
    render(<Counter size={24}>123</Counter>);
    const counter = screen.getByText("99+");
    expect(counter).toBeInTheDocument();
  });

  test("children = hello -> hel", () => {
    render(<Counter size={24}>hello</Counter>);
    const counter = screen.getByText("hel");
    expect(counter).toBeInTheDocument();
  });

  test("children = 1, size = 12, не должен быть найден", () => {
    render(<Counter size={12}>1</Counter>);
    const counter = screen.queryByText("1");
    expect(counter).not.toBeInTheDocument();
  });

  test("не должен быть найден", () => {
    render(<Counter size={8}>1</Counter>);
    const counter = screen.queryByText("1");
    expect(counter).not.toBeInTheDocument();
  });

  test("элементы pulse должны быть в документе", () => {
    render(<Counter pulse={true}>1</Counter>);
    const pulseElement1 = screen.getByTestId("pulse");
    const pulseElement2 = screen.getByTestId("pulse2");
    expect(pulseElement1).toBeInTheDocument();
    expect(pulseElement2).toBeInTheDocument();
  });
});
