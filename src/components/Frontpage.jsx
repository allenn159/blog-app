import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

const Frontpage = () => {
  const blogs = useSelector((state) => state.blogs.blogCollection);

  return (
    <div>
      {blogs.map((b) => (
        <div>
          <h1>{b.title}</h1>
          <p>{b.body}</p>
        </div>
      ))}
      <input></input>
      <input></input>
    </div>
  );
};

export default Frontpage;
