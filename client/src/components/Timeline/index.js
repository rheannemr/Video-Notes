import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineOppositeContent, TimelineConnector, TimelineDot } from '@material-ui/lab';
import NotesRoundedIcon from '@material-ui/icons/NotesRounded';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '2px 8px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function SavedNotes() {
    const classes = useStyles();
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
    useEffect(() => {
        fetch("/api/notes")
            .then(res => res.json())
            .then(res => console.log("notes are: ", setNotes(res)));
    }, [reUpload]);
    return (
        <>
            {notes.map(note => (
                <Timeline align="alternate" style={{ marginTop: "20vh" }}>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                Video Time
                                    </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
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
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                Video Time
                        </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
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
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <NotesRoundedIcon />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
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
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <NotesRoundedIcon />
                            </TimelineDot>
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
                </Timeline>
            
            ))}
        </>
    )}
export default SavedNotes;