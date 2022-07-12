import TodoNote from "./TodoNote";
import "../index.css";
import {useState} from "react";
import {nanoid} from "nanoid";
import AddNote from "./AddNote";

const TodoList = () => {
  const [notes, setNotes] = useState([{id: nanoid(), date: "7/12/2022", text: "hi"}, {id: nanoid(), date: "7/12/2022", text: "hi1"}, {id: nanoid(), date: "7/12/2022", text: "hi2"}, {id: nanoid(), date: "7/12/2022", text: "hi3"}, {id: nanoid(), date: "7/12/2022", text: "hi4"}]);

  const addNoteFunction = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(), text: text, date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]; /// bad to mutate state in React
    setNotes(newNotes);
  }

  const deleteNoteFunction = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="notes-list">
            <AddNote handleAddNote={addNoteFunction}/>
            {notes.map((note)=> <TodoNote id={note.id} date={note.date} text={note.text} handleDeleteNote={deleteNoteFunction}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;