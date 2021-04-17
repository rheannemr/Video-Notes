import React, { useState } from "react";

function SearchBar(props) {

    const [termState, setTerm] = useState('');

    const handleInputChange = (e) => {
        setTerm(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleFormSubmit(termState)
    }
    return (
        <div>
            <form style={{ marginTop: "20vh" }} onSubmit={handleSubmit}>
                <div>
                    <h4>Search</h4>
                    <input onChange={handleInputChange} name='video-search' type='text' value={termState} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;