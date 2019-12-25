import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoContent extends Component {
  render() {
    return (
      <div
        className="center_wrapper"
        style={{
          backgroundColor: "grey",
          padding: "10px 60px",
          color: "white"
        }}
      >
        <div className="vn_wrapper">
          <TodoItem />
        </div>
      </div>
    );
  }
}
export default TodoContent;
