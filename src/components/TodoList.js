import TodoNote from "./TodoNote";
import "../index.css";
import {useState, useEffect, useRef} from "react";
import {nanoid} from "nanoid";
import AddNote from "./AddNote";

const TodoList = () => {
  const getNotesFunction = () => {
    const savedNotes = localStorage.getItem("react-notes-data");
    return savedNotes ? JSON.parse(savedNotes) : [];
  };

  const [notes, setNotes] = useState(getNotesFunction);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (position) => {
    dragItem.current = position;
  };

  const dragEnter = (position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    let newNotes = [];
    const dragNote = notes.find((note) => note.id === dragItem);
    for(const note of notes) {
      if(note.id === dragItem) {
        continue;
      }
      if(note.id === dragOverItem) {
        newNotes.push(dragNote);
      }
      newNotes.push(note);
    }
    dragItem.current = null;
    dragOverItem.current = null;
    setNotes(newNotes);
    // const copyListItems = [...notes];
    // const dragItemContent = copyListItems[dragItem.current];
    // copyListItems.splice(dragItem.current, 1);
    // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    // dragItem.current = null;
    // dragOverItem.current = null;
    // setNotes(copyListItems);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message = "Are you sure you want to leave?";
    e.returnValue = message;
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
            {notes.map((note, index) =>
            <div
            onDragStart={() => dragStart(note.id)}
            onDragEnter={() => dragEnter(note.id)}
            onDragEnd={drop}
            draggable
            key={index}
            onDragOver={(e) => e.preventDefault()}>
              <TodoNote id={note.id} text={note.text} date={note.date} handleDeleteNote={deleteNoteFunction} editNoteFunction={editNoteFunction}/>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;