/** @jest-environment jsdom */
import React from "react";
import {render, screen} from "@testing-library/react";

import TodoNote from "./TodoList";

jest.mock("nanoid", () => {
  return {nanoid: () => "12345"};
});

it("should render a to do note component", () => {
  render(<TodoNote/>);
});

it("should render a save button", () => {
  render(<TodoNote/>);
  screen.getByText("Save");
});

it("should render edit div", () => {
  const {queryByTestId} = render(<TodoNote setEdit={true}/>);
  const div = queryByTestId("divWeWantToShow");
  expect(div).toBeTruthy();
});