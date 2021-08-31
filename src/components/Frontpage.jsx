import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewBlog,
  deleteBlog,
  toggleFavorite,
} from "../features/counterSlice";

import {
  AddIcon,
  DeleteIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
} from "../utils/materialUI_icons/index";

import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

import { v4 as uuidv4 } from "uuid";

const Frontpage = ({ search }) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogCollection);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs || []);

  const classes = useStyles();
  const didMount = useRef(false);

  const onSubmitNewBlog = (e) => {
    e.preventDefault();

    if (newTitle === "" && newBody === "") return;

    const newBlog = {
      id: uuidv4(),
      title: newTitle,
      body: newBody,
      favorite: false,
    };

    dispatch(addNewBlog(newBlog));
    setNewTitle("");
    setNewBody("");
  };

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
                <p>{b.body}</p>
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
