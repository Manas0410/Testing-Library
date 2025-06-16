import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render user Name ", () => {
    const user: User = { id: 1, name: "John Doe", isAdmin: false };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render 'Edit' button for admin users", () => {
    const user: User = { id: 2, name: "Jane Doe", isAdmin: true };

    render(<UserAccount user={user} />);

    expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
  });

  it("should not render 'Edit' button for non-admin users", () => {
    const user: User = { id: 3, name: "John Smith", isAdmin: false };
    render(<UserAccount user={user} />);
    expect(
      screen.queryByRole("button", { name: /edit/i })
    ).not.toBeInTheDocument();
  });
});
