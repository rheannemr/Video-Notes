import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core"
import NoteSaver from "../pages/VideoEditor";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  export default function ContainedButtons({videoId}) {
    
      console.log( "inside contained buttons", videoId)
    const classes = useStyles();
    
  
    return (
      <div className={classes.root}>
        <Link to={`/videoeditor/${videoId}`}>
        <Button variant="contained" color="primary">
          Link
        </Button>
        </Link>
      </div>
    );
  }

