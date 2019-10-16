import React from "react";
import StarRating from "./StarRating";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders 5 stars by default", () => {
  const { getAllByTestId } = render(<StarRating />);

  expect(getAllByTestId("star")).toHaveLength(5);
});

it("renders a specified number of stars", () => {
  const { getAllByTestId } = render(<StarRating starCount={7} />);

  expect(getAllByTestId("star")).toHaveLength(7);
});

it("renders empty stars with color #bbb by default", () => {
  const { getAllByTestId } = render(<StarRating />);

  expect(getAllByTestId("star")[0]).toHaveAttribute("color", "#bbb");
});

it("renders empty stars with the color of the emptyColor value", () => {
  const { getAllByTestId } = render(<StarRating emptyColor={"black"} />);

  expect(getAllByTestId("star")[0]).toHaveAttribute("color", "black");
});

it("renders filled stars as yellow by default", () => {
  const { getAllByTestId } = render(<StarRating value={1} />);

  expect(getAllByTestId("star")[0]).toHaveAttribute("color", "yellow");
});

it("renders filled stars with the color of the filledColor value", () => {
  const { getAllByTestId } = render(
    <StarRating value={1} filledColor={"black"} />
  );

  expect(getAllByTestId("star")[0]).toHaveAttribute("color", "black");
});

it("renders a star using the 1x size by default", () => {
  const { getAllByTestId } = render(<StarRating />);

  expect(getAllByTestId("star")[0]).toHaveClass("fa-1x");
});

it("renders a star using the size value", () => {
  const { getAllByTestId } = render(<StarRating size={"3x"} />);

  expect(getAllByTestId("star")[0]).toHaveClass("fa-3x");
});

it("renders 0 filled stars when value is 0", () => {
  const { getAllByTestId } = render(<StarRating value={0} />);

  // Check if all stars are empty
  for (let i = 0; i < getAllByTestId("star").length; i++) {
    // Default empty color: #bbb
    expect(getAllByTestId("star")[i]).toHaveAttribute("color", "#bbb");
  }
});

it("renders filled stars equal to value when value is greater than 0", () => {
  const { getAllByTestId } = render(<StarRating value={3} />);

  // Check if first 3 stars are filled and last stars are empty
  for (let i = 0; i < getAllByTestId("star").length; i++) {
    if (i < 3) {
      // Default filled color: yellow
      expect(getAllByTestId("star")[i]).toHaveAttribute("color", "yellow");
    } else {
      // Default empty color: #bbb
      expect(getAllByTestId("star")[i]).toHaveAttribute("color", "#bbb");
    }
  }
});

it("updates when clicking on an empty star", () => {});

it("sets the value to 0 when clicking on a filled star", () => {});
