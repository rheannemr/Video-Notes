import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  export default function RedirectBtn({videoId}) {
      const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <Link to={`/videonotes/${videoId}`}>
          <Button variant="contained" color="black" style={{ marginBottom: "15px" }}>
            Select
          </Button>
        </Link>
      </div>
    );
  }

