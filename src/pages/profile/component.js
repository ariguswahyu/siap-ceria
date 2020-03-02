import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";
import AppBar from "../../component/appbar";
import useStyles from "./style";
import CssBaseline from "@material-ui/core/CssBaseline";

import QRCode from 'qrcode.react';


function DetailAnggota(props) {
    const classes = useStyles();

    // const user = JSON.parse(localStorage.getItem("user"));
    // const nik = JSON.parse(localStorage.getItem("nik"));
    // const name = JSON.parse(localStorage.getItem("name"));

    let localStorageku = localStorage.getItem('userToken');
    console.log(localStorageku);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs" className={classes.container}>
                <AppBar title="Profile" />
                <h1>Halaman Profile</h1>



                <QRCode level="H" value="Aris Ganteng" />

            </Container>
        </React.Fragment>
    );

}


export default withRouter(DetailAnggota);