import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import Note from "../../../../../models/notes";

function NoteSaver() {
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
    useEffect(() => {
        fetch("/api/notes")
            .then(res => res.json())
            .then(res => console.log("notes are: ", setNotes(res)));
    }, [reUpload]);
    return (
        <Router>
            <div>
                <Link to="./"> All Notes</Link>
                <br />
                <Link to="./new-note"> Add a note</Link>
                <div>
                    <Switch>
                        <Route path="/new-note">
                            <NewNote triggerReUpload={triggerReUpload} />
                        </Route>
                        <Route path="/">
                            {notes.map(note => (
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{note.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{note.body}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
function NewNote({ triggerReUpload }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSave = () => {
        fetch("api/notes", {
            method: "POST",
            body: JSON.stringify({ title, body }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(data => triggerReUpload(data))
            .catch(err => alert(err));
    };
    return (
        <div>
            <TextField
                value={title}
                onChange={event => setTitle(event.target.value)}
                id="filled-full-width"
                label="Title"
                style={{ margin: 8 }}
                placeholder="Enter the note title here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
            />
            <TextField
                value={body}
                onChange={event => setBody(event.target.value)}
                id="filled-full-width"
                label="Body"
                style={{ margin: 8 }}
                placeholder="Enter the note body here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                multiline
            />
            <Button onClick={handleSave} variant="contained" color="primary">
                Primary
            </Button>
        </div>
    );
}

export default NoteSaver;