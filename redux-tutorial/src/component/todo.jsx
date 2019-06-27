import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/todo.css';

function Todo({ title, description }) {
  return (
    <section className={style.todo}>
      <p>{title}</p>
      <p>{description}</p>
    </section>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Todo;
