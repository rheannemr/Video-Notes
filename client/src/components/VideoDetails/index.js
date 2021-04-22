import React from "react";
import ContainedButtons from "../RedirectBtn";

function VideoDetails({video}) {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log((video));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            <ContainedButtons videoId={video.id.videoId} />
        </div>

    )
}

export default VideoDetails;