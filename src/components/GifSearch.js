import React, { useState } from 'react';

const GifSearch = ({ submitSearchItem }) => {
    const [searchItem, setSearchItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearchItem(searchItem);
    }

    const handleSearch = (e) => {
        setSearchItem(e.target.value);
    }

    return (
        <div style={{padding: 10, backgroundColor:"gray"}}>
            <form onSubmit={handleSubmit} style={{display:'flex', justifyContent: "center"}}>
                <label style={{marginRight:5 }}>Enter a Search Term</label>
                <input id="search" type="text" value={searchItem} onChange={handleSearch} style={{marginRight:5, fontWeight:"bold"}}/>
                <button type="submit" style={{backgroundColor:"green", fontWeight:"bold", borderRadius:15}}> Find Gifs</button>
            </form>
        </div>
    );
};

export default GifSearch;
