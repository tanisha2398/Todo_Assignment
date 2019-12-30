import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoListItem from "./TodoListItem";
import List from "@material-ui/core/List";

// import Checkbox from "material-ui/Checkbox";
class TodoContent extends Component {
  state = {
    textFieldValue: "",
    todos: []
  };
  componentDidMount() {
    if (localStorage.getItem("todos") == null) {
      this.setState({
        todos: []
      });
    } else {
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos"))
      });
    }
  }
  removeItem = (todo, index) => {
    var list = JSON.parse(localStorage.getItem("todos"));
    list.splice(index, 1);
    this.setState({
      todos: list
    });
    localStorage.setItem("todos", JSON.stringify(list));
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
        todos: JSON.parse(localStorage.getItem("todos")),

        textFieldValue: ""
      });
    }
  };
  render() {
    return (
      <div className="center_wrapper">
        {this.state.todos.map((todo, index) => {
          return (
            <List className="todolistitem">
              <TodoListItem
                todoItem={todo}
                i={index}
                onDelete={() => {
                  this.removeItem(todo, index);
                }}
              />
            </List>
          );
        })}

        <div className="vn_wrapper">
          {this.props.addButton ? (
            <TodoItem
              onTextChange={e => this._handleTextFieldChange(e)}
              onEnter={e => this.onEnterPress(e)}
              value={this.state.textFieldValue}
            />
          ) : (
            " "
          )}
        </div>
      </div>
    );
  }
}

export default TodoContent;
