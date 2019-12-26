import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
const TodoItem = props => {
  return (
    <div>
      <TextField
        id="filled-basic"
        autoFocus
        variant="filled"
        value={props.value}
        onChange={e => props.onTextChange(e)}
        onKeyPress={e => props.onEnter(e)}
      />
    </div>
  );
};

export default TodoItem;
