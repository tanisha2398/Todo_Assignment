import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TodoContent from "../TodoContent";
class Header extends Component {
  state = {
    show: false
  };

  toggleClass = value => {
    const currentState = this.state.show;
    this.setState({ show: !currentState });
  };
  render() {
    return (
      <div>
        <AppBar
          position="relative"
          className="appbar"
          style={{
            backgroundColor: "transparent"
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="header_logo_title">TODO</div>
            </div>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => this.toggleClass()}
              style={{ backgroundColor: "grey" }}
            >
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
        <TodoContent
          addButton={this.state.show}
          onClose={() => this.toggleClass()}
        />
      </div>
    );
  }
}
export default Header;
