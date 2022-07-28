import React from "react";
import {render} from "@testing-library/react";
import TodoList from "./TodoList";
import nanoid from 'nanoid/generate'

test("should render the App landing page", () => {
  jest.mock("nanoid");

  render(<TodoList/>);
});