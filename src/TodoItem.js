// TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle }) => {
  const [isDone, setIsDone] = useState(false);

  const handleToggle = () => {
    setIsDone(!isDone);
    onToggle(todo.id);
  };

  return (
    <div style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
