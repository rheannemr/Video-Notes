import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function VideoPlayer({ videoId, width, height }) {
	const videoSrc = `https://www.youtube.com/embed/${videoId}`;
	const { user, isAuthenticated, isLoading } = useAuth0();

	return (
		<div>
			<div className="ui embed">
				<iframe
					src={videoSrc}
					allowFullScreen
					title="Video player"
					style={{ width: width, height: height, alignItems: 'flex-start' }}
				/>
			</div>
			<h1>{user.name}</h1>
			{/* <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div> */}
		</div>
	);
}

export default VideoPlayer;
