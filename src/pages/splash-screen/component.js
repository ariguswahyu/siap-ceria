import React from "react";
import { Container, Typography } from "@material-ui/core";
import Ecclipse from "../../assets/Ellipse.png";
import Logo from "../../assets/Group 27.png";
import useStyles from "./style";

function SplashScreen(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="xs" className={classes.Container}>
            <img alt="ecclipse" src={Ecclipse} className={classes.imgEcclipse} />
            <img alt="logo" src={Logo} className={classes.imgLogo} />
            <Typography align="center" className={classes.textOne}>
                SIAP CERIA
      </Typography>
            <Typography align="center" className={classes.textTwo}>
                SISTEM PENDAFTARAN OKE OCE
      </Typography>
        </Container>
    );
}

export default SplashScreen;
