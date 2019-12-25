import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="header_logo_title">TODO</div>
            </div>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => console.log("floating clicked")}
              style={{ backgroundColor: "grey" }}
            >
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Header;
