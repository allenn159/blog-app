import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navBarCont: {
    height: "100px",
    position: "fixed",
    backgroundColor: "#ffac33",
    display: "flex",
    justifyContent: "center",
  },
  homeIcon: {
    display: "none",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginRight: "35px",
      marginLeft: "10px",
    },
  },
  title: {
    fontFamily: "Sarabun",
    flexGrow: 0,
    fontSize: "3vh",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
    marginRight: "25px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  addTitle: {
    fontFamily: "Sarabun",
    fontSize: "5vh",
  },
  searchBar: {
    position: "relative",
    marginRight: "35px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: "10px",
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:hover": {
        width: "30ch",
      },
    },
  },
  addIcon: {
    color: "white",
  },
  frontPageCont: {
    marginTop: "120px",
    padding: "0 20vw",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5vw",
    },
  },
  paper: { padding: "25px", marginBottom: "15px" },
  addPaper: {
    position: "relative",
    textAlign: "center",
    padding: "25px",
    marginBottom: "15px",
  },
  formTitle: {
    textAlign: "center",
    width: "30vw",
    margin: "40px 0",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
    },
  },
  formBody: {
    textAlign: "center",
    width: "45vw",
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
    },
  },
  button: {
    fontFamily: "Sarabun",
    backgroundColor: "#2A0944",
    color: "white",
    marginTop: "20px",
  },
}));
