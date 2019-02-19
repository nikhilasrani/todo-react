import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <h3>{this.props.todo.title}</h3>
      </div>
    );
  }
}

//Prop Types
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
};
export default TodoItem;
