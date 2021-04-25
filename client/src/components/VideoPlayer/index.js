import React from "react";

function VideoPlayer({ videoId, width, height }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (<div>
        <div className="ui embed">
            <iframe src={videoSrc} allowFullScreen title="Video player" style={{width: width, height: height, alignItems: "flex-start"}} />
        </div>
        {/* <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div> */}
    </div>
    
    )
}

export default VideoPlayer;