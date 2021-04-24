import React, { useState } from "react";
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import "./index.css";
import { IconButton } from "@material-ui/core";

function SearchBar(props) {

    const [termState, setTerm] = useState("");

    const handleInputChange = (e) => {
        setTerm(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleFormSubmit(termState)
    }
    return (
        <div>
            <form class="searchbar" style={{ marginTop: "10vh" }} onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleInputChange} name="video-search" type="text" value={termState} />
                    <IconButton type="submit" onClick={handleSubmit}>
                        <YoutubeSearchedForIcon />
                        </IconButton>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;