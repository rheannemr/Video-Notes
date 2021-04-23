import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VideoPlayer from "../VideoPlayer/index";
import NewNote from "../NewNote/index";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  function CenteredGrid(props) {
    const classes = useStyles();
  
    return (
      
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>{<VideoPlayer videoId={props.videoId}/>}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>{<NewNote triggerReUpload={props.triggerReUpload} />}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default CenteredGrid;