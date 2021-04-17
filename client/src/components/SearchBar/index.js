import React, { useState } from "react";

function SearchBar(props) {

    const [termState, setTerm] = useState('');

    //  useEffect((termFromSearchBar) => {
    //     API.get('/search', {
    //         params: {
    //             q: termFromSearchBar
    //         }
    //     })
    //     .then(response => {
    //         setTerm(response.data.items)
    //     })
    // }, [])

    const handleInputChange = (e) => {
        setTerm(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleFormSubmit(setTerm(termState))
    }
    return (
        <div>
            <form style={{ marginTop: "20vh" }} onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleInputChange} name='video-search' type='text' value={termState} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;