import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import MySavedVideoNotes from '../../components/Card';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  padding: theme.spacing(2)
	}
  }));

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

function SavedNotes() {
	const [notes, setNotes] = useState([]);
	const [reUpload, triggerReUpload] = useState(0);

	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();
  
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
			<Grid container className={classes.root} alignItems="center" justify="center" spacing={2}>
			<Grid item xs={12}>
            <Grid container spacing={spacing}>
			{notes.map((notesForThatVideo, i) => (
				<Grid item xs={6} sm={3}>
				<MySavedVideoNotes key={i} notesForVideo={notesForThatVideo} refresh={refresh} />
				</Grid>
			))}
			</Grid>
			</Grid>
			</Grid>
		</div>
	);
}

export default SavedNotes;
