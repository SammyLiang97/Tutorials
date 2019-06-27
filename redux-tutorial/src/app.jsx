import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
});


@connect(mapStateToProps)
@autobind
class App extends Component {
  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
        {todos.map(todo => (
          <section key={todo.index}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </section>
        ))}
      </React.Fragment>
    );
  }
}


App.propTypes = {
  todos: PropTypes.array,
};

export default App;
