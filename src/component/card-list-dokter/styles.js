import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  gridItemList: {
    marginTop: "7%"
  },
  gridContentList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gridList: {
    border: "1px solid #FFFFFF",
    borderRadius: "8px",
    height: "90px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  avatar: {
    display: "flex",
    justifyContent: "center"
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  nama: {
    fontWeight: "bold"
  },
  spesialis: {
    color: "#9E9E9E"
  }
}));
export default useStyles;
