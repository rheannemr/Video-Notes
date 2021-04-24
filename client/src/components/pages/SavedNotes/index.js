import React, { useState, useEffect } from "react";
import MySavedVideoNotes from "../../MySaved"
import VideoPlayer from "../../VideoPlayer";

function SavedNotes(props) {

    const [reUpload, triggerReUpload] = useState("");

    useEffect(() => {
        fetch("/api/notes")
            .then(res => res.json())
            .then(res => console.log("notes are: ", setNotes(res)));
    }, [reUpload]);

    return (
        <>
        <MySavedVideoNotes videoId='KQ0gFidlro8' />

        
        </>
    )
}

export default SavedNotes;