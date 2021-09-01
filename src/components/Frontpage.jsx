import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewBlog,
  deleteBlog,
  toggleFavorite,
} from "../features/counterSlice";

import {
  DeleteIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
} from "../utils/materialUI_icons/index";

import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Frontpage = ({ search }) => {
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
        {filteredBlogs.map((b) => (
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div key={b.id}>
                <Typography variant="h4">{b.title}</Typography>
                <p style={{ whiteSpace: "pre-line" }}>{b.body}</p>
                <DeleteIcon onClick={() => dispatch(deleteBlog(b.id))} />
                {b.favorite === false ? (
                  <FavoriteBorderIcon
                    onClick={() => dispatch(toggleFavorite(b.id))}
                  />
                ) : (
                  <FavoriteIcon
                    onClick={() => dispatch(toggleFavorite(b.id))}
                  />
                )}
              </div>
            </Paper>
          </Grid>
        ))}

        {/* <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>
        <input
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
        ></input>
        <AddIcon onClick={onSubmitNewBlog} /> */}
      </Grid>
    </div>
  );
};

export default Frontpage;
