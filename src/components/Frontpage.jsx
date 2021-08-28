import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewBlog } from "../features/counterSlice";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";

const Frontpage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogCollection);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  console.log(blogs);

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

  return (
    <div>
      {blogs.map((b) => (
        <div key={b.id}>
          <h1>{b.title}</h1>
          <p>{b.body}</p>
        </div>
      ))}
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      ></input>
      <input
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      ></input>
      <AddIcon onClick={onSubmitNewBlog} />
    </div>
  );
};

export default Frontpage;
