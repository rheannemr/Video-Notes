import React from "react";
import RedirectBtn from "../RedirectBtn";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    descriptionText: {
        fontFamily:'Comfortaa'
    }
}));

function VideoDetails({video}) {
    if (!video) {
        return <div></div>;
    }
    const classes = useStyles();
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log((video));
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} allowFullScreen title="Video player"/>
            </div>
            <div className="ui segment" className={classes.descriptionText}>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            <RedirectBtn videoId={video.id.videoId} />
        </div>

    )
}

export default VideoDetails;