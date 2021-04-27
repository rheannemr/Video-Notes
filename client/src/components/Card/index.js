import React, { useState } from 'react';
import {
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	IconButton,
	Typography
} from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import VideoPlayer from '../VideoPlayer';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300,
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: '#aa5228'
	},
	cardDisplay: {
		display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
	}
}));

function MySavedVideoNotes(props) {
	const [ reUpload, triggerReUpload ] = useState('');
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleDelete = () => {
		console.log(props.notesForVideo[0].videoId);
		console.log(props);
		fetch('/api/notes/delete', {
			method: 'POST',
			body: JSON.stringify({ videoId: props.notesForVideo[0].videoId }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((data) => triggerReUpload(data))
			.catch((err) => alert(err));
	};

	const deleteNote = () => {
		fetch(`/api/notes/${props.notesForVideo[0].videoId}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((data) => triggerReUpload(data))
			.catch((err) => alert(err));

		console.log(props.notesForVideo);
	};

	return (
		<div className={classes.cardDisplay}>
			<Card className={classes.root} style={{ marginTop: '10vh' }}>
				<CardHeader
					avatar={
						<Avatar className={classes.avatar}>
							<BookmarkBorderIcon />
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<DeleteSweepIcon onClick={() => handleDelete(props.notesForVideo[0].id)} />
						</IconButton>
					}
					title="Video Name"
					subheader="This is a subheader"
				/>
				<VideoPlayer
					videoId={props.notesForVideo[0].videoId}
					className={classes.media}
					width="100"
					height="60"
				/>
				<CardMedia title="Saved Video" />
				<CardActions disableSpacing>
					<IconButton aria-label="Go to Video Notes page">
						<QueuePlayNextIcon />
					</IconButton>
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="Expand Notes"
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<div>
						{props.notesForVideo.map((note) => (
							<CardContent>
								<Typography>{note.title}</Typography>
								<Typography>{note.body}</Typography>
							</CardContent>
						))}
					</div>
				</Collapse>
			</Card>
		</div>
	);
}

export default MySavedVideoNotes;
