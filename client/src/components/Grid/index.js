import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import VideoPlayer from "../VideoPlayer";
import NewNote from "../NewNote";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));
  
  function CenteredGrid(props) {
    const classes = useStyles();

    return (
      
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>{<VideoPlayer videoId={props.videoId} width="650px" height="400px"/>}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>{<NewNote triggerReUpload={props.triggerReUpload} videoId={props.videoId} />}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default CenteredGrid;