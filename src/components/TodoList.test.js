/**
 * @jest-environment jsdom
 */

import React from "react";
import {render, screen} from "@testing-library/react";
import TodoList from "./TodoList";
import '@testing-library/jest-dom'

jest.mock("nanoid", () => {
  return {nanoid: () => "12345"};
});

it("should render the Notes landing page", () => {
  render(<TodoList/>);
});

it("should render the added Notes", () => {
  const todoList = {id: 1, text: "wash car", date: "07/28/2022"};
  render(<TodoList id={todoList.id} text={todoList.text} date={todoList.date}/>);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash car");
})