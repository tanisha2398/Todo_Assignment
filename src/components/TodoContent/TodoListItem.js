import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

class TodoListItem extends Component {
  //   const classes = useStyles();
  state = {
    checked: []
  };
  handleToggle = (item, value) => () => {
    this.props.onDelete(item, value);
    const currentIndex = this.state.checked.indexOf(value);
    // console.log("current index", currentIndex);
    var newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked
    });
  };

  render() {
    return (
      <div className="list_item">
        <ListItem
          key={this.props.i}
          role={undefined}
          dense
          button
          onClick={this.handleToggle(this.props.todoItem, this.props.i)}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={this.state.checked.indexOf(this.props.i) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": this.props.i }}
            />
          </ListItemIcon>
          <ListItemText id={this.props.i} primary={this.props.todoItem} />
        </ListItem>
      </div>
    );
  }
}
export default TodoListItem;
