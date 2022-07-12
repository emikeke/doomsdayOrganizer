import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoNote = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className="note">
      <div className="header">
        {date}
        <span className="trash-icon">
          <FontAwesomeIcon icon="fa-trash" className="delete-icon" onClick={()=> handleDeleteNote(id)}/>
        </span>
      </div>
      <span className="body">{text}</span>
    </div>
  );
};

export default TodoNote;