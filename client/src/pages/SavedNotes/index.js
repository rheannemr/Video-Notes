import React, { useState, useEffect } from 'react';
import MySavedVideoNotes from '../../components/Card';

function sort(notes) {
	const videoIds = notes.map((note) => note.videoId);
	// Solution for removing duplicates found here: https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
	let uniqueIds = [...new Set(videoIds)];
	const display = [];
	uniqueIds.forEach((uniqueId) => {
		const notesForThatVideo = notes.filter((note) => note.videoId === uniqueId);
		display.push(notesForThatVideo);
	});
	return display;
}

function SavedNotes(props) {
	const [notes, setNotes] = useState([]);
	const [reUpload, triggerReUpload] = useState(0);

	const refresh = () => {
		triggerReUpload(reUpload + 1);
	};

	useEffect(
		() => {
			const user = localStorage.getItem('auth0.user');
			const data = { name: user };
			fetch('/api/notes/user', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					const sortedNotes = sort(res);
					console.log(sortedNotes);
					console.log(user.name);
					setNotes(sortedNotes);
				})
				.catch((err) => alert(err));
		},
		[reUpload]
	);

	return (
		<div>
			{notes.map((notesForThatVideo, i) => (
				<MySavedVideoNotes key={i} notesForVideo={notesForThatVideo} refresh={refresh} />
			))}
		</div>
	);
}

export default SavedNotes;
