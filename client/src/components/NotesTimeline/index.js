import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, IconButton } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineOppositeContent, TimelineConnector, TimelineDot } from "@material-ui/lab";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { pink } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "2px 8px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    timelineDot: {
        backgroundColor: pink[300],
    }
}));


function NotesTimeline(props) {

    const classes = useStyles();
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
       
    useEffect(() => {
        console.log(props.videoId);
        const user = localStorage.getItem('auth0.user');
        const data = { name: user };
        fetch('/api/notes/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then(res => console.log("notes are: ", setNotes(res)))
            .catch((err) => alert(err));
    }, [reUpload]);
    return (
        <>
            <Timeline align="alternate" style={{ marginTop: "20vh" }} >
                {notes.filter(note => note.videoId == props.videoId).map((note, i) => (
                    <TimelineItem key={i}>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                Video Time
                                </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className={classes.timelineDot}>
                                <IconButton aria-label="settings">
                                    <DeleteSweepIcon />
                                </IconButton>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent >
                            <Paper  elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    {note.title}
                                </Typography>
                                <Typography>{note.body}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </>
    )
}
export default NotesTimeline;