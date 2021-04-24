import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import CenteredGrid from "../../Grid/index";

function NoteSaver() {
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
    const [videoId, setVideoId] = useState('');

    const location = useLocation();

    useEffect(() => {
        setVideoId(location.pathname.split('/')[2]);
    }, [location])

    // useEffect(() => {
    //     fetch("/api/notes")
    //         .then(res => res.json())
    //         .then(res => console.log("notes are: ", setNotes(res)));
    // }, [reUpload]);
    return (
        <div>
        <Container style={{padding: '5px', margin: '20vh'}}>
        <CenteredGrid  videoId={videoId} triggerReUpload={triggerReUpload}/> 
        </Container>
        <Link to={{
            pathname: "/savednotes",
            notes: '',
                      
            }}>
          <Button variant="contained" color="primary">
              Save
          </Button>
        </Link>
        </div>
    );
}

export default NoteSaver;