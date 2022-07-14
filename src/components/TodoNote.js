import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoNote = ({id, text, date, handleDeleteNote, handleEditNote}) => {

  return (
    <div className="note">
      <div className="header">
        {date}
        <span className="trash-icon">
          <FontAwesomeIcon icon="fa-pen-to-square" className="edit-icon" onClick={()=> handleEditNote(id)}/>
          <FontAwesomeIcon icon="fa-trash" className="delete-icon" onClick={()=> handleDeleteNote(id)}/>
        </span>
      </div>
      <span className="body">{text}</span>
    </div>
  );
};

export default TodoNote;