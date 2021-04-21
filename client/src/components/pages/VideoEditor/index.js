import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Timeline from '../../pages/SavedNotes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid(props) {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{<VideoPlayer videoId={props.videoId}/>}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{<NewNote triggerReUpload={props.triggerReUpload} />}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}


function NoteSaver() {
    const [notes, setNotes] = useState([]);
    const [reUpload, triggerReUpload] = useState("");
    const [videoId, setVideoId] = useState('');

    const location = useLocation();

    useEffect(() => {
        setVideoId(location.pathname.split('/')[2]);
    }, [location])

    useEffect(() => {
        fetch("/api/notes")
            .then(res => res.json())
            .then(res => console.log("notes are: ", setNotes(res)));
    }, [reUpload]);
    return (
        <Container style={{padding: '5px', margin: '20vh'}}>
        <CenteredGrid  videoId={videoId} triggerReUpload={triggerReUpload}/> 
        </Container>
        
    );
}

function VideoPlayer({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (<div>
        <div className='ui embed'>
            <iframe src={videoSrc} allowFullScreen title='Video player' style={{width: '650px', height: '400px', alignItems: 'flex-start'}} />
        </div>
        {/* <div className='ui segment'>
            <h4 className='ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div> */}
    </div>
    
    )
}
function NewNote({ triggerReUpload }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSave = () => {
        fetch("/api/notes", {
            method: "POST",
            body: JSON.stringify({ title, body }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(data => triggerReUpload(data))
            .catch(err => alert(err));
        // console.log("data from inside NEWNOTE in VideoEditor folder: ", req.body)
    };
    return (
        <div>
            <TextField
                value={title}
                onChange={event => setTitle(event.target.value)}
                id="filled-full-width"
                label="Title"
                style={{ margin: 8 }}
                placeholder="Enter the note title here"
                // fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                value={body}
                onChange={event => setBody(event.target.value)}
                id="filled-full-width"
                label="Body"
                style={{ margin: 8 }}
                placeholder="Enter the note body here"
                // fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <Button onClick={handleSave} variant="contained" color="primary">
                Save Note
            </Button>
            <Timeline />
        </div>
    );
}

export default NoteSaver;