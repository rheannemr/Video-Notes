import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Card,CardHeader, CardMedia, CardContent, CardActions, Collapse,Avatar, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import VideoPlayer from '../VideoPlayer';
import RedirectBtn from '../RedirectBtn';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300
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
		backgroundColor: '#d45548'
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
		const user = localStorage.getItem('auth0.user');
		fetch('/api/notes/delete', {
			method: 'POST',
			body: JSON.stringify({ videoId: props.notesForVideo[0].videoId, name: user }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((data) => triggerReUpload(data))
			.catch((err) => alert(err));
		props.refresh();
	};

	const handleRedirect = () => {
		<Link to={`/videonotes/${{videoId: props.notesForVideo[0].videoId}}`} />
	}

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
					<Link to={`/videonotes/${props.videoId}`}>
						<QueuePlayNextIcon />
					</Link>
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
						{props.notesForVideo.map((note, i) => (
							<CardContent key={i}>
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
