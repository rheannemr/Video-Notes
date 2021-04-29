import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, IconButton } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineOppositeContent, TimelineConnector, TimelineDot } from "@material-ui/lab";
import BorderColorIcon from '@material-ui/icons/BorderColor';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "2px 8px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    timelineDot: {
        backgroundColor: '#d45548',
    }
}));


function NotesTimeline(props) {

    const classes = useStyles();
    const [notes, setNotes] = useState([]);
           
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
    });
    
    return (
        <>
            <Timeline align="alternate" style={{ marginTop: "20vh" }} >
                {notes.filter(note => note.videoId == props.videoId).map((note, i) => (
                    <TimelineItem key={i}>
                        <TimelineSeparator>
                            <TimelineDot className={classes.timelineDot}>
                                <IconButton aria-label="settings">
                                    <BorderColorIcon />
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