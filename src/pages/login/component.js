import React, { useState, useContext, useEffect } from "react";
// import swal from 'sweetalert2'
import swal from "sweetalert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useStyles from "./style";
import LoginImage from "../../assets/logors111.png";
import { login } from "../../services/login";








function Login(props) {


  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
  }, []);

  const handleLogin = async () => {

    const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    };


    login(data)
      .then(res => {
        console.log(res);
        localStorage.setItem("userToken", "Bearer " + res.token);
        localStorage.setItem("login", true);
        let localStorageku = localStorage.getItem('userToken');
        console.log("ini lokal storage : " + localStorageku);
        swal("Great!", "You logged!", "success");
        //swal.fire('Great!', 'You logged!', 'success')
        this.props.history.push("/");

      })
      .catch(error => {
        if (error.response === "Unauthorized") {
          console.log(error.response);
          // return swal("The Email or Password is invalid, Please try again");
        }
      });
  };


  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <img src={LoginImage} className={classes.image} alt="login" />
          </Grid>

          <div align="center">

            <Grid item xs={12} className={classes.username}>
              <TextField
                // error={errMail}
                id="username"
                name="username"
                type="email"
                label="Email"
                // value={email}
                // onChange={handleChangeEmail}
                fullWidth={true}
                style={{ maxWidth: "90%" }}
              />
            </Grid>

            <Grid item xs={12} className={classes.password}>
              <TextField
                // error={errMail}
                id="password"
                name="password"
                type="password"
                label="password"
                // value={email}
                // onChange={handleChangeEmail}
                fullWidth={true}
                style={{ maxWidth: "90%" }}
              />
            </Grid>
            {/* 
        <Button variant="contained" color="primary" className={classes.buttonlogin}>
          Primary
        </Button> */}

            <Box className={classes.buttonBoxBottom}>
              <Button
                disableRipple={true}
                id="submit-button"
                className={classes.buttonBottom}
                style={{
                  backgroundColor: "#F7A647"
                }}
                onClick={handleLogin}
              >
                <Grid container spacing={0}>
                  <Grid item xs={12} className={classes.gridButton}>
                    <Typography className={classes.textButtonBottom}>
                      Login
                </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Box>
          </div>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;

