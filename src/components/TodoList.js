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
  console.log(draggedOverNote, draggedOverNote.note);

  const dragEnter = (noteToReplace) => {
    draggedOverNote.note = noteToReplace;
  };

    const drop = (draggedNote) => {
      if (draggedOverNote.note) {
        let reorderedNotes = [];
        for (let i = 0; i < notes.length; i++) {
          switch (notes[i]) {
            case draggedNote:
              console.log("banana");
              reorderedNotes.push(draggedOverNote.note);
              break;
            case draggedOverNote.note:
              console.log("orange");
              reorderedNotes.push(draggedNote);
              break;
            default:
              reorderedNotes.push(notes[i]);
          }
        }
        draggedOverNote.note = undefined;
        setNotes(reorderedNotes);
      }
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

  const saveNotesFunction = () => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  };

  useEffect(() => {
    saveNotesFunction();
  }, [notes]);

  const editNoteFunction = (id, noteText) => {
    notes.find((note) => note.id === id).text = noteText;
    saveNotesFunction();
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