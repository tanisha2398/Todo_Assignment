import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoContent extends Component {
  state = {
    textFieldValue: "",
    todos: []
  };
  _handleTextFieldChange = e => {
    this.setState({
      textFieldValue: e.target.value
    });
  };
  onEnterPress = e => {
    // e.preventDefault();
    if (e.key === "Enter") {
      e.preventDefault();
      var todo = this.state.textFieldValue;
      //   console.log(todo);
      if (localStorage.getItem("todos") == null) {
        var todos = [];
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        var todos = JSON.parse(localStorage.getItem("todos"));
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos"))
      });
    }
  };
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
          <TodoItem
            onTextChange={(e) => this._handleTextFieldChange(e)}
            onEnter={(e) => this.onEnterPress(e)}
            value={this.state.textFieldValue}
          />
        </div>
      </div>
    );
  }
}
export default TodoContent;
