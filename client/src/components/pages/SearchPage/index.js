import React, { useState } from "react";
import SearchBar from "../../SearchBar/index";
import VideoList from "../../VideoList/index";
import VideoDetails from "../../VideoDetails/index";
import API from "../../../utils/API"

function SearchPage() {
    const [videoState, setVideo] = useState([]);
    const [selectedState, setSelected] = useState('');

    const handleSubmit = async (termForSearchBar) => {
        const response = await API.get('/search', {
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
        <div>
            <SearchBar
                handleFormSubmit={handleSubmit} />
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