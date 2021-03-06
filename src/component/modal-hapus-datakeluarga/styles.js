import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "280px",
    height: "216px",
    backgroundColor: "#FFFFFF",
    border: "0.1px solid #FFFFFF",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  question: {
    color: "#00000",
    fontSize: "14px"
  },
  name: {
    color: "#26CAC0"
  },
  gridItemTwo: {
    paddingTop: "2em"
  },
  buttonAgree: {
    border: "2px solid #F7A647",
    minWidth: "118px",
    minHeight: "48px"
  },
  buttonCancel: {
    border: "2px solid #F7A647",
    background: "#FFFFFF",
    minWidth: "118px",
    minHeight: "48px"
  }
}));

export default useStyles;
