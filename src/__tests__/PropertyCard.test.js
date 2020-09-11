import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title="mockTitle"
        type="Bungalow"
        bathrooms={9}
        bedrooms={6}
        price={200000}
        city="Leeds"
        email="mockemail@email.com"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByTestId } = render(
      <PropertyCard
        title="mockTitle"
        type="Bungalow"
        bathrooms={9}
        bedrooms={6}
        price={200000}
        city="Leeds"
        email="mockemail@email.com"
      />
    );

    expect(getByTestId("title-id")).toHaveClass("title");
    expect(getByTestId("type-city-id")).toHaveClass("type-city");
    expect(getByTestId("bathrooms-id")).toHaveClass("bathrooms");
    expect(getByTestId("price-id")).toHaveClass("price");
    expect(getByTestId("emailbutton-id")).toHaveClass("emailbutton");
  });
});
