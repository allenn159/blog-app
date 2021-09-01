import React, { useState } from "react";
import { Typography, Paper, TextField, Button, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addNewBlog } from "../features/counterSlice";

import useStyles from "./styles";
import { v4 as uuidv4 } from "uuid";

const AddBlog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const onSubmitNewBlog = (e) => {
    e.preventDefault();

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

  return (
    <div className={classes.frontPageCont}>
      <form onSubmit={onSubmitNewBlog}>
        <Paper className={classes.addPaper}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.addTitle}>Add New Blog</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.formTitle}
                label="Title"
                variant="outlined"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                minRows={15}
                className={classes.formBody}
                label="Body"
                variant="outlined"
                multiline={true}
                value={newBody}
                onChange={(e) => setNewBody(e.target.value)}
                required={true}
              />
            </Grid>
          </Grid>
          <Button type="submit" className={classes.button} variant="contained">
            Submit
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default AddBlog;
