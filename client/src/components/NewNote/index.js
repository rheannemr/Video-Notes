import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Popover, Typography } from '@material-ui/core';
import NotesTimeline from '../NotesTimeline';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
	typography: {
	  padding: theme.spacing(2),
	},
  }));

function NewNote({ triggerReUpload, videoId }) {
	const classes = useStyles();
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');
	const [anchorEl, setAnchorEl] = useState(null);

	const { user } = useAuth0();
	const handleSave = (event) => {
		setAnchorEl(event.currentTarget);
		console.log(user.name);
		const name = user.name;
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
		// console.log("data from inside NEWNOTE in VideoEditor folder: ", req.body)
		setTitle('');
		setBody('');
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
			<Button aria-describedby={id} variant="contained" color="primary" onClick={handleSave}>
			  Open Popover
			</Button>
			<Popover
			  id={id}
			  open={open}
			  anchorEl={anchorEl}
			  onClose={handleClose}
			  anchorReference="anchorPosition"
			  anchorPosition={{ top: 300, left: 200 }}
			  anchorOrigin={{
				vertical: 'center',
				horizontal: 'right',
			  }}
			  transformOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			  }}
			>
			  <Typography className={classes.typography}>The content of the Popover.</Typography>
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
				label="Title"
				style={{ margin: 8 }}
				placeholder="Enter the note title here"
				// fullWidth
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
				label="Body"
				style={{ margin: 8 }}
				placeholder="Enter the note body here"
				// fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true
				}}
				variant="outlined"
			/>
			<div>
			<SimplePopover />
			</div>
			<NotesTimeline videoId={videoId} />
		</div>
	);
}

export default NewNote;

