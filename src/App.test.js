import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("displays a greeting after button press", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Click me/));
  const linkElement = screen.getByText(/Hello Johannes/i);
  expect(linkElement).toBeInTheDocument();
});
