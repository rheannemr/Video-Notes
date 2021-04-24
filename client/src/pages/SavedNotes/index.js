import React, { useState, useEffect } from "react";
import MySavedVideoNotes from "../../components/Card"

function SavedNotes(props) {
    const [notes, setNotes] = useState([]);
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