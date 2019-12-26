import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

const TodoListItem = props => {
  //   const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItem
      key={props.key}
      role={undefined}
      dense
      button
      onClick={handleToggle(props.key)}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(props.key) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": props.key }}
        />
      </ListItemIcon>
      <ListItemText id={props.key} primary={props.todoItem} />
    </ListItem>
  );
};
export default TodoListItem;
