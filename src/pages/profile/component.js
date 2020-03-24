import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";
import AppBar from "../../component/appbar";
import useStyles from "./style";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Profile from "../../assets/avatar.png";
import Arrow from "../../assets/arrow.png";
import User from "../../assets/users.png";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";

import QRCode from 'qrcode.react';


function DetailAnggota(props) {
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem("user"));
    const nik = JSON.parse(localStorage.getItem("nik"));
    const name = JSON.parse(localStorage.getItem("name"));

    const handleClickOne = () => {
        // props.history.push("/edit-profil");
        alert("OKE");
    };

    const handleClickTwo = () => {
        // props.history.push("/list-anggota");
        alert("OKE");
    };


    const handleLogOut = () => {
        swal({
            title: "Are you sure?",
            buttons: ["Back", "Sure"],
            icon: "warning",
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                localStorage.removeItem("login");
                localStorage.removeItem("userToken");
                localStorage.removeItem("user");
                setTimeout(() => {
                    swal("You are logged out!", {
                        icon: "success"
                    });

                    props.history.push("/login");
                }, 3000);
                // window.location.reload();

            } else {
                swal("You safe!");
            }
        });
    };



    let localStorageku = localStorage.getItem('userToken');
    console.log(localStorageku);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs" className={classes.container}>
                <AppBar title="Profile" />
                <Grid container spacing={0} className={classes.gridTop}>
                    <Grid item xs={2} className={classes.gridName}>
                        <img src={Profile} className={classes.image} alt="avatar" />
                    </Grid>
                    <Grid item xs={7} className={classes.gridName}>
                        <Typography className={classes.name}>{name}</Typography>

                        <Typography className={classes.nik}>NIK : {nik}</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.gridEdit}>
                        <Typography onClick={handleClickOne}>Edit Profile</Typography>
                    </Grid>
                </Grid>

                <Grid
                    container
                    spacing={0}
                    className={classes.gridItemTwo}
                    onClick={handleClickTwo}
                >
                    <Grid item xs={2} className={classes.icon}>
                        <img src={User} alt="user" />
                    </Grid>
                    <Grid item xs={5} className={classes.gridTitle}>
                        <Typography className={classes.title}>Anggota Keluarga</Typography>
                    </Grid>
                    <Grid item xs={5} className={classes.arrow}>
                        <img src={Arrow} alt="back" />
                    </Grid>
                </Grid>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <div className={classes.boxButton}>
                        <Button
                            onClick={handleLogOut}
                            fullWidth
                            disableRipple={true}
                            id="submit-button"
                            className={classes.button}
                        >
                            <Typography style={{ textTransform: "none" }}>Keluar</Typography>
                        </Button>
                    </div>
                </div>



                {/* <QRCode level="H" value="Aris Ganteng" /> */}

            </Container>
        </React.Fragment>
    );

}


export default withRouter(DetailAnggota);