import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  BoxLoket: {
    paddingTop: "12px",
    background: "#E9F9F8",
    border: " 1px solid #26CAC0",
    boxSizing: "border-box",
    borderRadius: "8px",
    width: "86px",
    height: "86px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  TypographyLoket: {
    fontSize: "14px",
    lineHeight: "7px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "#26CAC0",
    justifyContent: "center"
  },
  TypographyLoketCategory: {
    fontWeight: "bold",
    fontSize: "48px",
    lineHeight: "61px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "#26CAC0",
    justifyContent: "center"
  },
  nomorAntrian: {
    fontfamily: "Nunito-Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "11.4px",
    lineheight: "16px",
    color: "#9E9E9E",
    marginTop: "1em"
  },
  nomor: {
    fontSize: "16px",
    lineheight: "20px",
    color: "#F7A647"
  },
  nomorTerakhir: {
    fontWeight: "bold",
    fontSize: "16px",
    lineheight: "20px",
    color: "#25282B"
  },
  nomorSekarang: {
    fontWeight: "bold",
    fontSize: "16px",
    lineheight: "20px",
    color: "#F7A647"
  },
  gridContainer: {
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#ffffff",
    height: "119px",
    borderRadius: "8px",
    marginTop: 20
  },

  gridLeft: {
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gridRight: {
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5em"
  },
  itemRight: {
    display: "flex",
    flexDirection: "column"
  }
}));
export default useStyles;
