import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
    const [gifs, setGifs] = useState([]);
    const [item, setItem] = useState("dolphin");

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${item}&api_key=TNfo0Ro2bfNKxVY3IYsLD4HBm1ekN2z5&rating=g&limit=3`)
            .then((res) => res.json())
            .then((val) => {
                const allGifs = val.data.map((e) => ({ url: e.images.original.url }));
                setGifs(allGifs);
            });
    }, [item]);

    return (
        <div>
            <GifSearch submitSearchItem={setItem} />
            <GifList data={gifs} />
        </div>
    );
};

export default GifListContainer;
