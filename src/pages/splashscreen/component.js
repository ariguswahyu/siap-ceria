import React from "react";
import { Container, Typography } from "@material-ui/core";
import Ecclipse from "../../assets/Ellipse.png";
import Logo from "../../assets/logors111.png";
import useStyles from "./style";

function SplashScreen() {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <img alt="ecclipse" src={Ecclipse} className={classes.imgEcclipse} />
      <img alt="logo" src={Logo} className={classes.imgLogo} />
      <Typography align="center" className={classes.textOne}>
        SIAP CERIA
      </Typography>
      <Typography align="center" className={classes.textTwo}>
        Sistem Informasi Antrian Pendaftaran CERIA
      </Typography>
    </Container>
  );
}

export default SplashScreen;