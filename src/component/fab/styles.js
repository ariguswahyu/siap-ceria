import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  stickToBottom: {
    position: "fixed",
    bottom: "5%"
  },
  image: {
    width: 50,
    height: 50
  },
  gridFab: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "5%"
  },
  fab: {
    backgroundSize: "cover",
    backgroundColor: "#26CAC0"
  },
  icon: {
    color: "#ffffff",
    alignItems: "center",
    display: "flex"
  }
}));
export default useStyles;
