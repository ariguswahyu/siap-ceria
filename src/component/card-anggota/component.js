import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import useStyles from "./style";

function CardAnggota(props) {
  const { nik, name, handleEdit } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.card}>
      <Grid container spacing={0} className={classes.cardContainer}>
        <Grid item xs={6} className={classes.gridLeft}>
          <Typography className={classes.nik}>NIK: {nik}</Typography>

          <Typography onClick={props.click} className={classes.name}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridRight}>
          <Typography onClick={handleEdit} className={classes.links}>
            Edit
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withRouter(CardAnggota);
