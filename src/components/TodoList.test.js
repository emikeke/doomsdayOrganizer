/**
 * @jest-environment jsdom
 */

import React from "react";
import {render} from "@testing-library/react";
import TodoList from "./TodoList";


jest.mock("nanoid", () => {
  return {nanoid: () => "ABCD"};
});

test("should render the App landing page", () => {
  render(<TodoList/>);
});