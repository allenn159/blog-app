import React from "react";
import { AppBar, Toolbar, InputBase, Typography } from "@material-ui/core";
import {
  SearchIcon,
  AddIcon,
  HomeIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
} from "../utils/materialUI_icons/index";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

const NavBar = ({ setSearch }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar className={classes.navBarCont}>
        <Toolbar>
          <Link to="/">
            <HomeIcon className={classes.homeIcon} />
          </Link>
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
            <AddIcon className={classes.addIcon} fontSize="large" />
          </Link>

          {location.pathname === "/favorite" ? (
            <Link to="/">
              <FavoriteIcon className={classes.heartIcon} fontSize="large" />
            </Link>
          ) : (
            <Link to="/favorite">
              <FavoriteBorderIcon
                className={classes.heartIcon}
                fontSize="large"
              />
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
