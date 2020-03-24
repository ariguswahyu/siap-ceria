import React from "react";
import { Container, Typography } from "@material-ui/core";
import Ecclipse from "../../assets/Ellipse.png";
import Logo from "../../assets/Group 131.png";
import useStyles from "./style";

function SplashScreen(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <img alt="ecclipse" src={Ecclipse} className={classes.imgEcclipse} />
      <img alt="logo" src={Logo} className={classes.imgLogo} />
      <Typography align="center" className={classes.textOne}>
        SIAP CERIA MOBILE APPS
      </Typography>
      <Typography align="center" className={classes.textTwo}>
        RSUD AJIBARANG
      </Typography>
    </Container>
  );
}

export default SplashScreen;