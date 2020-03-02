import React, { useState, useContext, useEffect } from "react";
// import swal from 'sweetalert2'
import { withRouter } from "react-router-dom";
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

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CircularProgress from "@material-ui/core/CircularProgress";

import Ilustrasi from "../../assets/login-ilustrasi.png";


import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";



function Login(props) {

  const [loading, setLoading] = useState(false);
  //const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // localStorage.removeItem("user");
    // localStorage.removeItem("userToken");
  }, []);

  const handleLogin = () => {

    const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    };

    console.log(data);

    login(data).
      then((res) => {
        console.log(res);
      }).
      catch((error) => {
        console.log(error);
      });

    // Axios.post('http://localhost/api.simrs.rsudajibarang/api/auth/login', {
    //   username: data.username,
    //   password: data.password
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //event.preventDefault();
  };
  const classes = useStyles();

  const handleBack = () => {
    props.history.push("/");
  };


  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid className={classes.container}>
        <AppBar
          position="static"
          className={classes.appbar}
          onClick={handleBack}
        >
          <Toolbar>
            <ArrowBackIcon />
            <Typography className={classes.login}> Login</Typography>
          </Toolbar>
        </AppBar>
        <img
          src={LoginImage}
          alt=""
          style={{
            marginTop: -30,
            height: 320
          }}
        />

        <div align="center">
          <Grid item xs className={classes.email}>
            <TextField
              id="username"
              name="username"
              label="Email"
              fullWidth={true}
              style={{ maxWidth: "90%" }}
            />
          </Grid>
          <Grid item xs className={classes.password}>
            <TextField
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              fullWidth={true}
              style={{ maxWidth: "90%" }}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{
                        color: "#666666",
                        padding: 0,
                        margin: 0
                      }}
                    >
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>

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
        <Grid item align="center">
          <Typography style={{ marginTop: "1em" }}>
            Belum Punya Akun ?{" "}
            <b style={{ color: "#F7A647" }}>
              Daftar
            </b>
          </Typography>
        </Grid>
      </Grid>
      <Dialog open={loading} onClose={() => setLoading(false)}>
        <DialogContent>
          <div align="center" style={{ margin: 10 }}>
            <CircularProgress />
          </div>

          <DialogContentText id="alert-dialog-description">
            Harap tunggu...
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default withRouter(Login);

