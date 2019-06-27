import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import Todo from './component/todo';

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
          <Todo {...todo} key={todo.index} />
        ))}
      </React.Fragment>
    );
  }
}


App.propTypes = {
  todos: PropTypes.array,
};

export default App;
