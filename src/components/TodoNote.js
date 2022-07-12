import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoNote = ({id, text, date}) => {
  return (
    <div className="note">
      <div className="header">
        {date}
        <span className="trash-icon">
          <FontAwesomeIcon icon="fa-trash" />
        </span>
      </div>
      <span className="body">{text}</span>
    </div>
  );
};

export default TodoNote;