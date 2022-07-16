/* eslint-disable react/prop-types */
import React, {useState} from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (textAreaInput) => {
    setNoteText(textAreaInput.target.value);
  }

  const handleSaveClick = (e) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }

  }
  return (
    <div className="note new">
      <div className="textarea-container">
        <textarea className="textarea" rows="8" cols="29" placeholder="Type here to add a note..." value={noteText} onChange={handleChange}></textarea>
      </div>
      <div className="footer"><button className="save" onClick={handleSaveClick}>Save</button></div>
    </div>
  )
}

export default AddNote;