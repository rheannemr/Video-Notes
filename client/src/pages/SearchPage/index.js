import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import SearchBar from "../../components/SearchBar";
import VideoList from "../../components/VideoList";
import VideoDetails from "../../components/VideoDetails";
import API from "../../utils/API"

const useStyles = makeStyles((theme) => ({}));

function SearchPage() {
    const classes = useStyles();
    const [videoState, setVideo] = useState([]);
    const [selectedState, setSelected] = useState("");

    const handleSubmit = async (termForSearchBar) => {
        const response = await API.get("/search", {
            params: {
                q: termForSearchBar
            }
        })
        setVideo(response.data.items)
    };

    const handleVideoSelect = (video) => {
        setSelected(video)
    }

    return (
        <div className={classes.root}>
            <SearchBar
                handleFormSubmit={handleSubmit} id="searchbar"/>
            <div>
                <VideoDetails video={selectedState} />
            </div>
            <div>
                <VideoList handleVideoSelect={handleVideoSelect} video={videoState} />
            </div>
        </div>
    )
};

export default SearchPage;