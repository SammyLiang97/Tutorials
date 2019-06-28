import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/todo.css';

function AsyncTodo({ title, description }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <section
      className={style.todo}
    >
      <p>{title}</p>
      <p>{description}</p>
    </section>
  );
}

AsyncTodo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AsyncTodo;
