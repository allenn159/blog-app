import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog, toggleFavorite } from "../features/counterSlice";

import useStyles from "./styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { DeleteIcon, FavoriteIcon } from "../utils/materialUI_icons/index";

const FavoriteBlogs = ({ search }) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogCollection);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs || []);

  const classes = useStyles();
  const didMount = useRef(false);

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  useEffect(() => {
    if (didMount.current) {
      onHandleFilter(search);
    } else {
      didMount.current = true;
    }
  }, [search]);

  const onHandleFilter = (search) => {
    const searchResults = blogs.filter((blog) => {
      if (blog.title.toLowerCase().includes(search.toLowerCase())) {
        return blog;
      }
    });
    setFilteredBlogs(searchResults);
  };

  return (
    <div>
      <Grid className={classes.frontPageCont} container>
        {filteredBlogs.map((b) => {
          if (b.favorite)
            return (
              <Grid key={b.id} item xs={12}>
                <Paper className={classes.paper}>
                  <div>
                    <Typography className={classes.blogTitle} variant="h4">
                      {b.title} {""}
                      <FavoriteIcon
                        className={classes.heartIcon}
                        onClick={() => dispatch(toggleFavorite(b.id))}
                      />
                    </Typography>
                    <p style={{ whiteSpace: "pre-line" }}>{b.body}</p>
                    <DeleteIcon
                      className={classes.deleteIcon}
                      onClick={() => dispatch(deleteBlog(b.id))}
                    />
                  </div>
                </Paper>
              </Grid>
            );
        })}
      </Grid>
    </div>
  );
};

export default FavoriteBlogs;
