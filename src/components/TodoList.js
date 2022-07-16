/* eslint-disable react/react-in-jsx-scope */
import TodoNote from "./TodoNote";
import "../index.css";
import React, {useState, useEffect, useRef} from "react";
import {nanoid} from "nanoid";
import AddNote from "./AddNote";

const TodoList = () => {
  const getNotesFunction = () => {
    const savedNotes = localStorage.getItem("react-notes-data");
    return savedNotes ? JSON.parse(savedNotes) : [];
  };

  const [notes, setNotes] = useState(getNotesFunction);
    const draggedOverNote = useRef();

  const dragEnter = (noteToReplace) => {
    draggedOverNote.note = noteToReplace;
  };

  const drop = (draggedNote) => {
    let reorderedNotes = [...notes];
    let draggedIndex = notes.indexOf(draggedNote);
    let replacedIndex = notes.indexOf(draggedOverNote.note);
    reorderedNotes[draggedIndex] = draggedOverNote.note;
    reorderedNotes[replacedIndex] = draggedNote;
    setNotes(reorderedNotes);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (pageUnload) => {
    pageUnload.preventDefault();
    const message = "Are you sure you want to leave?";
    pageUnload.returnValue = message;
    return message;
  };

  const updateNotesFunction = () => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  };

  useEffect(() => {
    updateNotesFunction();
  }, [notes]);

  const editNoteFunction = (id, noteText) => {
    notes.find((note) => note.id === id).text = noteText;
    updateNotesFunction();
  };

  const addNoteFunction = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(), text: text, date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNoteFunction = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="notes-list">
              <AddNote handleAddNote={addNoteFunction}/>
              {notes.map((note) =>
                <div
                  onDragEnter={() => dragEnter(note)}
                  onDragEnd={() => drop(note)}
                  draggable
                  key={note.id}
                  onDragOver={(e) => e.preventDefault()}>
                  <TodoNote id={note.id} text={note.text} date={note.date}
                    handleDeleteNote={deleteNoteFunction} editNoteFunction={editNoteFunction}/>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;