import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

test("displayes an error message", () => {
  //   const component = render(<Alert message="Error!" />);
  //   const alertMessageNode = component.getByText("Error!");
  //   expect(alertMessageNode.textContent).toBe("Error!");

  // Below is a cleaner, destructured way of writing

  const { getByText, asFragment } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe("Error!");
  expect(asFragment()).toMatchSnapshot();
});

test("displayes a success message", () => {
  const { getByText, asFragment } = render(
    <Alert message="Success!!!" success />
  );
  //  short for success={true}
  expect(getByText(/Success/).textContent).toBe("Success!!!");
  expect(asFragment()).toMatchSnapshot();
});

test("does not render error or success message if message prop is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});
