import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";


function SavedNotes() {
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
    useEffect(() => {
        fetch("/api/notes")
            .then(res => res.json())
            .then(res => console.log("notes are: ", setNotes(res)));
    }, [reUpload]);
    return (
        <Router>
            <div style={{ marginTop: "20vh" }}>
                <div>
                    <Switch>
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

export default SavedNotes;