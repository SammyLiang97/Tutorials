import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';

@autobind
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  render() {
    const { title, description } = this.state;
    const { onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit.bind(this, { ...this.state })}>
        Title:&nbsp;&nbsp;&nbsp;
        <input type="text" value={title} onChange={this.handleChange} name="title" />
        <br />
        Description:&nbsp;&nbsp;&nbsp;
        <input type="text" value={description} onChange={this.handleChange} name="description" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
