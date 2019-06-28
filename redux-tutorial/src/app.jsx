import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import Todo from './component/todo';
import AddTodo from './component/addTodo';
import { addTodo, selectedTodo, deleteTodo } from './actions';

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
  selectedTodoIndex: state.todoReducer.selectedTodoIndex,
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: todo => dispatch(addTodo(todo)),
  handleTodoSelected: index => dispatch(selectedTodo(index)),
  handleDeleteTodo: index => dispatch(deleteTodo(index)),
});

@connect(mapStateToProps, mapDispatchToProps)
@autobind
class App extends Component {
  onAddTodo(todo, ev) {
    ev.preventDefault();
    const { handleAddTodo, todos } = this.props;
    todo.index = todos[todos.length - 1].index + 1;
    handleAddTodo(todo);
  }

  handleTodoSelected(index) {
    const { handleTodoSelected } = this.props;
    handleTodoSelected(index);
  }

  handleDeleteTodo(index) {
    const { handleDeleteTodo } = this.props;
    handleDeleteTodo(index);
  }

  render() {
    const { todos, selectedTodoIndex } = this.props;
    return (
      <React.Fragment>
        {todos.map(todo => (
          <Todo
            {...todo}
            key={todo.index}
            onTodoSelected={this.handleTodoSelected}
            selectedTodoIndex={selectedTodoIndex}
            onDeleteTodo={this.handleDeleteTodo}
          />
        ))}
        <AddTodo onSubmit={this.onAddTodo} />
      </React.Fragment>
    );
  }
}


App.propTypes = {
  todos: PropTypes.array,
  handleAddTodo: PropTypes.func,
  handleTodoSelected: PropTypes.func,
  selectedTodoIndex: PropTypes.number,
  handleDeleteTodo: PropTypes.func,
};

export default App;
