import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import useStyles from "./styles";

function Component(props) {
  const { title } = props;
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleBack = value => {
    setValue(value);
    switch (props.history.location.pathname) {
      case "/riwayat":
        props.history.push("/");
        break;

      case "/pilih-loket":
        props.history.push("/");
        break;

      case "/edit-profil":
        props.history.push("/profil");
        break;

      case "/list-anggota":
        props.history.push("/profil");
        break;

      case "/edit-profil-keluarga":
        props.history.push("/list-anggota");
        break;

      case "/detail-anggota-keluarga":
        props.history.push("/list-anggota");
        break;
      default:
        props.history.goBack();
        console.log("Test default case");
        break;
    }
  };

  return (
    <Box display="flex" justifyContent="center" bgcolor="white">
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          {props.goBack && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="Menu"
            >
              <ArrowBackIcon onClick={handleBack} />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(Component);
