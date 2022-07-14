import TodoNote from "./TodoNote";
import "../index.css";
import {useState, useEffect} from "react";
import {nanoid} from "nanoid";
import AddNote from "./AddNote";

const TodoList = () => {
  const getNotesFunction = () => {
    const savedNotes = localStorage.getItem("react-notes-data");
    return savedNotes ? JSON.parse(savedNotes) : [];
  };

  const [notes, setNotes] = useState(getNotesFunction);

  const updateNotesFunction = () => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  };

  const addNoteFunction = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(), text: text, date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  };

  const deleteNoteFunction = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNoteFunction = (id) => {
 
  };

  useEffect(() => {
    updateNotesFunction();
  }, [notes]);

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="notes-list">  
            <AddNote handleAddNote={addNoteFunction}/>
            {notes.map((note)=> <TodoNote id={note.id} text={note.text} date={note.date} handleDeleteNote={deleteNoteFunction} handleEditNote={editNoteFunction}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;