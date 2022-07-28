import React from "react";
import {render, fireEvent} from "@testing-library/react";
import user from "@testing-library/user-event"
import AddNote from "./AddNote";

it ("should accept values for the new to do", () => {
  const testAddNote = jest.fn();
  const {debug, getByPlaceholderText} = render(<AddNote addNote={testAddNote}/>)

  const input = getByPlaceholderText(/Type here to add a note.../i)
  fireEvent.change(input, {target: {value: "a new to do"}})
  user.type(input, "a new to do")
  expect(input.value).toContain("a new to do")

  debug()
});