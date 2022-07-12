import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoNote = () => {
  return (
    <div className="note">
      <div className="header">
        07/11/2022
        <span className="trash-icon">
          <FontAwesomeIcon icon="fa-trash" />
        </span>
      </div>
      <span className="body">This is the body of the note. This is the body of the note.</span>
    </div>
  );
};

export default TodoNote;