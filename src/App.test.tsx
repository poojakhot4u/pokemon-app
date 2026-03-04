import { render, screen } from "@testing-library/react";

function Dummy() {
    return <div>Hello</div>;
}

test("renders hello", () => {
    render(<Dummy />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
});