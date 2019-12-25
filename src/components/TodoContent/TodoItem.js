import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
class TodoItem extends Component {
  state = {
    textFieldValue: ""
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
      console.log("enter");
    }
  };
  render() {
    return (
      <div>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={this.state.textFieldValue}
          onChange={this._handleTextFieldChange}
          onKeyPress={this.onEnterPress}
        />
      </div>
    );
  }
}

export default TodoItem;
