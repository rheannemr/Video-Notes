import React, { useState, useEffect } from 'react';
import MySavedVideoNotes from '../../components/Card';

function sort(notes) {
	// get all videoIds (get all colors, get all types of clothes)
	const videoIds = notes.map((note) => note.videoId);
	// remove dooplicates( [red,blue, red, red] => [red, blue])
	// this solution for removing duplicates was found in https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
	let uniqueIds = [ ...new Set(videoIds) ];
	// for each videoId find all notes (for each color, find all balls)
	const display = [];
	uniqueIds.forEach((uniqueId) => {
		const notesForThatVideo = notes.filter((note) => note.videoId === uniqueId);
		display.push(notesForThatVideo);
	});
	return display;
}

function SavedNotes(props) {
	const [ notes, setNotes ] = useState([]);
	const [ reUpload, triggerReUpload ] = useState('');

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
		[ reUpload ]
	);

	return (
		<div>
			{notes.map((notesForThatVideo, i) => <MySavedVideoNotes key={i} notesForVideo={notesForThatVideo} />)}
		</div>
	);
}

export default SavedNotes;
