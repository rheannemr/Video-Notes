import React, { useState, useEffect } from "react";
import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from "@material-ui/core";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import VideoPlayer from "../VideoPlayer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function MySavedVideoNotes(props) {
  const [reUpload, triggerReUpload] = useState("");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const deleteNote = (videoId) =>
  fetch(`/api/notes/${videoId}`, {
    method: 'DELETE',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
  })
  .then(data => triggerReUpload(data))
  .catch(err => alert(err));

  console.log(props.notesForVideo)

  return (
    <div>
      <Card className={classes.root} style={{ marginTop: "10vh" }}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <FavoriteBorderIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => deleteNote(props.videoId)}>
              <DeleteSweepIcon />
            </IconButton>
          }
          title="Video Name"
          subheader="This is a subheader"
        />
        <VideoPlayer videoId={props.notesForVideo[0].videoId} className={classes.media} width="100" height="60"/>
        <CardMedia
          title="Saved Video"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Go to Video Notes page">
            <QueuePlayNextIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Expand Notes"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div>
            {props.notesForVideo.map(note => (
              <CardContent>
                <Typography>{note.title}</Typography>
                <Typography>{note.body}</Typography>
              </CardContent>
            ))}
          </div>
        </Collapse>
      </Card>
    </div>
  );
}

export default MySavedVideoNotes;