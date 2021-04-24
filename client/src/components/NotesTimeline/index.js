import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineOppositeContent, TimelineConnector, TimelineDot } from "@material-ui/lab";
import NotesRoundedIcon from "@material-ui/icons/NotesRounded";
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
        console.log(props.videoId)
        fetch(`/api/notes/?videoid=KQ0gFidlro8`)
            .then(res => res.json())
            .then(res => console.log("notes are: ", setNotes(res)));
    }, [reUpload]);
    return (
        <>
        <Timeline align="alternate" style={{ marginTop: "20vh" }}>
            {notes.map(note => (
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Video Time
                                </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <NotesRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
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