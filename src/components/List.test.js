import { render, screen } from "@testing-library/react";
import Lists from "./Lists";

test("renders learn react link", () => {
  render(<Lists />);
  const linkElement = screen.getByText("USA");
  expect(linkElement).toBeInTheDocument();
});
