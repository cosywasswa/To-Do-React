import styles from 'styles/TodoItem.module.scss';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

import { useState, useRef } from 'react';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing} aria-label="Edit">
          {' '}
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button type="button" onClick={() => delTodo(itemProp.id)} aria-label="Delete"><FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} /></button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        ref={editInputRef}
        defaultValue={itemProp.title}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
