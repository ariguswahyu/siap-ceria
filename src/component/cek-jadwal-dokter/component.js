import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AmbilNomorIcon from "../../assets/ambilnomor.png";
import useStyles from "./styles";

function AmbilNomorAntrian() {
  const classes = useStyles();
  return (
    <Link className={classes.textRight} to="/cek-jadwal-dokter">
      <Grid className={classes.card}>
        <Grid container spacing={0} className={classes.gridCard}>
          <Grid item xs={6} className={classes.gridLeft}>
            <img src={AmbilNomorIcon} alt="ambil antrian" />
          </Grid>
          <Grid item xs={6} className={classes.gridRight}>
            Cek Jadwal Dokter
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
}

export default AmbilNomorAntrian;
