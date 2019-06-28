import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/todo.css';

function Todo({
  index, title, description, onTodoSelected, selectedTodoIndex = undefined,
  onDeleteTodo,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <section
      className={`${style.todo} ${selectedTodoIndex === index ? style.selected : ''}`}
      onClick={onTodoSelected.bind(this, index)}
      role="presentation"
    >
      <p>{title}</p>
      <p>{description}</p>
      <button type="button" onClick={onDeleteTodo.bind(this, index)}>删除</button>
    </section>
  );
}

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onTodoSelected: PropTypes.func.isRequired,
  selectedTodoIndex: PropTypes.number,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default Todo;
