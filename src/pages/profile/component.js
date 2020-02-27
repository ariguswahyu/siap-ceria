import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";
import AppBar from "../../component/appbar";
import useStyles from "./style";
import CssBaseline from "@material-ui/core/CssBaseline";

function DetailAnggota(props) {

    const classes = useStyles();


    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs" className={classes.container}>
                <AppBar title="Profile" />
                <h1>Halaman Profile</h1>
            </Container>
        </React.Fragment>
    );

}


export default withRouter(DetailAnggota);