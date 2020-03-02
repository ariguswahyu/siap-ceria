import React from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";
import useStyles from "./styles";

function Fabs(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.gridFab}>
      <Grid className={classes.stickToBottom}>
        <Fab
          className={classes.fab}
          disableRipple={true}
          style={{ backgroundColor: "#26CAC0" }}
          onClick={() => {
            props.history.push("/add-keluarga");
          }}
        >
          <AddIcon className={classes.icon} />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default withRouter(Fabs);
