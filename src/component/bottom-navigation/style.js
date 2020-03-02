import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  stickToBottom: {
    width: "100%",
    maxWidth: 446,
    position: "fixed",
    bottom: 0
  },
  root: {
    fill: "#C4C4C4",
    "&$selected": {
      color: "#26CAC0",
      fill: "#26CAC0"
    },
    selected: {},
    width: "100%"
  },
  selected: {
    color: "#26CAC0",
    fill: "#26CAC0"
  }
}));
export default useStyles;  
