import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    background: "white",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingBottom: 20,
    justifyContent: "center"
  },
  textRight: {
    color: "#000000",
    fontSize: "14px",
    textDecoration: "none",
    display: "flex"
  },
  gridLeft: {
    marginTop: "1.2em",
    paddingLeft: 20
  },
  gridRight: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 8,
    alignItems: "center",
    paddingTop: "5%"
  }
}));

export default useStyles;
