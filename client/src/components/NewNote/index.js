import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import NotesTimeline from "../NotesTimeline";

function NewNote({ triggerReUpload, videoId }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSave = () => {
        fetch("/api/notes", {
            method: "POST",
            body: JSON.stringify({ title, body, videoId }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(data => triggerReUpload(data))
            .catch(err => alert(err));
        // console.log("data from inside NEWNOTE in VideoEditor folder: ", req.body)
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
                // fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                value={body}
                onChange={event => setBody(event.target.value)}
                id="filled-full-width"
                label="Body"
                style={{ margin: 8 }}
                placeholder="Enter the note body here"
                // fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <Button onClick={handleSave} variant="contained" color="primary">
                Save Note
            </Button>
            <NotesTimeline videoId={videoId} />
        </div>
    );
}

export default NewNote;