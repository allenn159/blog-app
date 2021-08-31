import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  Menu,
  MenuItem,
  Button,
  Dialog,
} from "@material-ui/core";
import { SearchIcon, AddIcon } from "../utils/materialUI_icons/index";
import useStyles from "./styles";

const NavBar = ({ setSearch }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar className={classes.navBarCont}>
        <Toolbar>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            className={classes.title}
            onClick={handleClick}
          >
            Blog App
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Favorite Blogs</MenuItem>
          </Menu>
          <div className={classes.searchBar}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={(e) => setSearch(e.target.value)}
              className={classes.searchInput}
              placeholder="Search..."
            />
          </div>
          <AddIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
