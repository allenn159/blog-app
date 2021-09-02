import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Frontpage from "./components/Frontpage";
import AddBlog from "./components/AddBlog";
import FavoriteBlogs from "./components/FavoriteBlogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div style={{ fontFamily: "Sarabun" }}>
        <NavBar setSearch={setSearch} handleDialogOpen={handleDialogOpen} />
        <Switch>
          <Route exact path="/">
            <Frontpage
              search={search}
              open={open}
              handleDialogClose={handleDialogClose}
            />
          </Route>
          <Route exact path="/addblog">
            <AddBlog />
          </Route>
          <Route>
            <FavoriteBlogs search={search} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
