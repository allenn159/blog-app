import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, Typography } from "@material-ui/core";
import { SearchIcon, AddIcon } from "../utils/materialUI_icons/index";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const NavBar = ({ setSearch, handleDialogOpen }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

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
          <Typography component={Link} to="/" className={classes.title}>
            Blog App
          </Typography>

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
          <Link to="/addblog">
            <AddIcon className={classes.addIcon} />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
