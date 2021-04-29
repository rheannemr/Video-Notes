import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Popover, Typography } from '@material-ui/core';
import NotesTimeline from '../NotesTimeline';

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2)
	}
}));

function NewNote({ triggerReUpload, videoId }) {
	const classes = useStyles();
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [anchorEl, setAnchorEl] = useState(null);
	const [count, setCount] = useState(0);

	const handleSave = (event) => {
		setAnchorEl(event.currentTarget);
		const name = localStorage.getItem('auth0.user');
		fetch('/api/notes', {
			method: 'POST',
			body: JSON.stringify({ title, body, videoId, name }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((data) => triggerReUpload(data))
			.catch((err) => alert(err));
		setTitle('');
		setBody('');
		setCount(count + 1);
	};

	function SimplePopover() {
		const classes = useStyles();
		const handleClose = () => {
			setAnchorEl(null);
		};

		const open = Boolean(anchorEl);
		const id = open ? 'simple-popover' : undefined;

		return (
			<div>
				<Button aria-describedby={id} variant="contained" color="black" onClick={handleSave}>
					Save Note
				</Button>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					variant="popover"
					anchorReference="anchorPosition"
					anchorPosition={{ top: 300, left: 1130 }}
					anchorOrigin={{
						vertical: 'center',
						horizontal: 'right'
					}}
					transformOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
				>
					<Typography className={classes.typography}>Note is Saved!</Typography>
				</Popover>
			</div>
		);
	}

	return (
		<div>
			<TextField
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				id="filled-full-width"
				label="Elapsed Time"
				style={{ margin: 8 }}
				placeholder="0:00"
				margin="normal"
				InputLabelProps={{
					shrink: true
				}}
				variant="outlined"
			/>
			<TextField
				value={body}
				onChange={(event) => setBody(event.target.value)}
				id="filled-full-width"
				label="Note"
				style={{ margin: 8 }}
				placeholder="Enter the note body here"
				margin="normal"
				InputLabelProps={{
					shrink: true
				}}
				variant="outlined"
			/>
			<div>
				<SimplePopover color="primary" />
			</div>
			<NotesTimeline videoId={videoId} refreshCount={count} />
		</div>
	);
}

export default NewNote;
