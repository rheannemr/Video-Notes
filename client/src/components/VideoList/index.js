import React from "react";
import VideoItem from "../VideoItem";
import VideoDetails from '../VideoDetails'

function VideoList({video, handleVideoSelect}) {
    const renderedVideos = video.map((video, i) => {
        return <VideoDetails key={i} video={video}
        handleVideoSelect={handleVideoSelect}/>
    })
    return <div>{renderedVideos}</div>
}

export default VideoList;