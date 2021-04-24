import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import CenteredGrid from "../../components/Grid";

function VideoNotes() {
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
    const [videoId, setVideoId] = useState("");

    const location = useLocation();

    useEffect(() => {
        setVideoId(location.pathname.split("/")[2]);
    }, [location])

    return (
        <div>
        <Container style={{padding: "5px", margin: "10vh"}}>
        <CenteredGrid  videoId={videoId} triggerReUpload={triggerReUpload}/> 
        </Container>
        <Link to={{
            pathname: "/savednotes",
            notes: "",
                      
            }}>
          <Button variant="contained" color="primary">
              Save
          </Button>
        </Link>
        </div>
    );
}

export default VideoNotes;