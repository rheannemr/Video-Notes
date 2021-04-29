import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, TextField } from "@material-ui/core";
import "./index.css";

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
            <form id="searchbar" style={{ marginTop: "10vh" }} onSubmit={handleSubmit}>
                <div>
                    <TextField
                        onChange={handleInputChange}
                        name="video-search"
                        type="text"
                        value={termState}
                        style={{ margin: 8 }}
                        placeholder="Search"
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined">
                    </TextField>
                    <IconButton type="submit" onClick={handleSubmit}>
                        <SearchIcon fontSize="large" />
                    </IconButton>
                </div>
            </form>
        </div>
    )
};

export default SearchBar;