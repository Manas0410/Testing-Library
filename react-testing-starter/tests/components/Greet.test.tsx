import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render hello with the name when name is provided", () => {
    render(<Greet name="John" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/John/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet name="" />);

    const button = screen.getByRole("button", { name: /login/i });
    expect(button).toBeInTheDocument();
  });
});
