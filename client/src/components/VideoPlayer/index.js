import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function VideoPlayer({ videoId }) {
	const videoSrc = `https://www.youtube.com/embed/${videoId}`;
	const { user, isAuthenticated, isLoading } = useAuth0();

	return (
		<div>
			<div className="ui embed"
				style={{
					position: "relative",
					paddingBottom: "56.25%",
					paddingTop: 25,
					height: 0
				}}
			>
				<iframe
					src={videoSrc}
					frameBorder="0"
					allowFullScreen
					title="Video player"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}}
				/>
			</div>
		</div>
	);
}

export default VideoPlayer;
