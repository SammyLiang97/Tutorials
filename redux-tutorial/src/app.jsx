import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import Todo from './components/todo';
import AddTodo from './components/addTodo';
import {
  addTodo, selectedTodo, deleteTodo, fetchTodos,
} from './actions';
import { STATUS } from './reducers/asyncTodoReducer';
import AsyncTodo from './components/asyncTodo';

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
  selectedTodoIndex: state.todoReducer.selectedTodoIndex,
  asyncTodos: state.asyncTodoReducer.todos,
  fetchingStatus: state.asyncTodoReducer.fetchingStatus,
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: todo => dispatch(addTodo(todo)),
  handleTodoSelected: index => dispatch(selectedTodo(index)),
  handleDeleteTodo: index => dispatch(deleteTodo(index)),
  fetchTodos: () => dispatch(fetchTodos()),
});

@connect(mapStateToProps, mapDispatchToProps)
@autobind
class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { fetchTodos } = this.props;
    fetchTodos();
  }

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

  renderAsyncTodos() {
    const { asyncTodos, fetchingStatus } = this.props;
    switch (fetchingStatus) {
      case STATUS.REQUEST:
        return 'Fetching async todos....';
      case STATUS.SUCCESS:
        return asyncTodos.map(todo => (
          <AsyncTodo {...todo} key={todo.index} />
        ));
      case STATUS.FAILURE:
        return 'Fetching fail!';
      default:
        return null;
    }
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
        <br />
        <br />
        {this.renderAsyncTodos()}
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
  asyncTodos: PropTypes.array,
  fetchingStatus: PropTypes.number,
  fetchTodos: PropTypes.func,
};

export default App;
