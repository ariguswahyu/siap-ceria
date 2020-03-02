import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#ffffff",
    height: "86px",
    borderRadius: "8px"
    // width: "90%",
  },
  cardContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  links: {
    textDecoration: "none",
    fontSize: "12px",
    color: "#F7A647"
  },
  nik: {
    color: "#9E9E9E",
    fontSize: "12px"
  },
  name: {
    color: "#25282B",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridLeft: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "5%"
  },
  gridRight: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));
export default useStyles;
