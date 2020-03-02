import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
}

function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { open, handleClose, handleClick } = props;
  console.log("test", classes.paper);
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      {props.loadingAdd ? (
        <div style={modalStyle} className={classes.paper}>
          <Grid container align="center" className={classes.container}>
            <Grid item xs className={classes.gridItemText}>
              <Typography className={classes.question}>
                Harap tunggu...
              </Typography>
            </Grid>
            <div align="center" style={{ marginTop: 10 }}>
              <CircularProgress />
            </div>
          </Grid>
        </div>
      ) : (
        <div style={modalStyle} className={classes.paper}>
          <Grid container align="center" className={classes.container}>
            <Grid item xs>
              <Box className={classes.boxloket}>
                <Typography className={classes.typographyLoket}>
                  loket
                </Typography>
                <Typography className={classes.TypographyLoketCategory}>
                  {props.name}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs className={classes.gridItemTwo}>
              <Typography className={classes.question}>
                Apakah anda yakin memilih
                <Typography className={classes.loket}>
                  loket {props.name}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs className={classes.gridItemTwo}>
              <Grid container spacing={0} align="center">
                <Grid item xs>
                  <Button
                    className={classes.buttonCancel}
                    onClick={handleClose}
                  >
                    <Typography
                      style={{
                        textTransform: "none",
                        color: "#F7A647",
                        fontSize: "14px"
                      }}
                    >
                      Batal
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    className={classes.buttonAgree}
                    style={{
                      background: "#F7A647"
                    }}
                    onClick={handleClick}
                  >
                    <Typography
                      style={{
                        textTransform: "none",
                        color: "#FFFFFF",
                        fontSize: "14px"
                      }}
                    >
                      Ya
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </Modal>
  );
}
export default SimpleModal;
