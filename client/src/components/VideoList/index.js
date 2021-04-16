import React from "react";
import VideoItem from "../VideoItem/index";

function VideoList({video, handleVideoSelect}) {
    const renderedVideos = video.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}
        handleVideoSelect={handleVideoSelect}/>
    })
    return <div>{renderedVideos}</div>
}

export default VideoList;