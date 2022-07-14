import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const TodoNote = ({id, text, date, handleDeleteNote}) => {

  const [edit, setEdit] = useState(false);
  const [noteText, setNoteText] = useState(text);

  const handleChange = (e) => {
    setNoteText(e.target.value);
  }
  const handleSaveClick = (e) => {
    setNoteText(noteText);
    setEdit(false);
  }

  return (
    <div className="note" key={id}>
      <div className="header">
        {date}
        <span className="trash-icon">
          <FontAwesomeIcon icon="fa-pen-to-square" className="edit-icon" onClick={()=> setEdit(true)}/>
          <FontAwesomeIcon icon="fa-trash" className="delete-icon" onClick={()=> handleDeleteNote(id)}/>
        </span>
      </div>
      {edit ? 
      <>
        <textarea className="textarea" rows="8" cols="29" placeholder="Type here to add a note..." value={noteText} onChange={handleChange}></textarea>
        <div className="footer-edit"><button className="save" onClick={handleSaveClick}>Save</button></div>
      </>
      : <span className="body">{noteText}</span>}
    </div>
  );
};

export default TodoNote;