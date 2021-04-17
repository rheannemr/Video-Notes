import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";


function NoteSaver() {
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
    const [videoId, setVideoId] = useState('');

    const location = useLocation();

    useEffect(() => {
        setVideoId(location.pathname.split('/')[2]);
    }, [location])

    useEffect(() => {
        fetch("/api/notes")
            .then(res => res.json())
            .then(res => console.log("notes are: ", setNotes(res)));
    }, [reUpload]);
    return (
        <div style={{ marginTop: "20vh" }}>
            <VideoPlayer videoId={videoId} />
            <NewNote triggerReUpload={triggerReUpload} />
        </div>
    );
}

function VideoPlayer({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (<div>
        <div className='ui embed'>
            <iframe src={videoSrc} allowFullScreen title='Video player' />
        </div>
        {/* <div className='ui segment'>
            <h4 className='ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div> */}
    </div>)
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
                // fullWidth
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
                // fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                multiline
            />
            <Button onClick={handleSave} variant="contained" color="primary">
                Save Note
            </Button>
        </div>
    );
}

export default NoteSaver;