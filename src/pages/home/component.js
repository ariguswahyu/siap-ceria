import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Profile from "../../assets/avatar.png";
import useStyles from "./style";
import ContentLoader from "react-content-loader";

function Home(props) {
    const classes = useStyles();

    const user = "embeuye";
    const name = "Embe Setiawan"
    const nik = "3304030408950004";

    
    return (

        <Container maxWidth="xs" className={classes.container}>
            <div>
                <Grid container spacing={0} className={classes.gridContainer}>
                    <Grid item xs className={classes.gridOne}>
                        <Grid
                            container
                            spacing={0}
                            align="center"
                            className={classes.containerProfil}
                        >
                            <Grid item xs={2} className={classes.image} align="center">
                                <img src={Profile} alt="avatar" />
                            </Grid>
                            <Grid item xs={0} className={classes.gridName}>
                                <Typography className={classes.name}>{name}</Typography>
                                <Typography className={classes.nik}>NIK: {nik}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{ padding: "10px 20px" }}>
                    <h2>Menu 1</h2>
                </div>
                <div style={{ padding: "10px 20px", marginBottom: 50 }}>
                    <h2>Menu 2</h2>
                </div>
            </div>
        </Container>
    );
}


export default Home;