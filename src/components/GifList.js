import React from 'react';

const GifList = ({ data }) => {
    return (
        <ul style={{ marginTop: 30 }}>
            {data.map((gif) => (
                <li key={gif.url} style={{ marginBottom: 5 }}>
                    <img src={gif.url} alt="gif" />
                </li>
            ))}
        </ul>
    );
};

export default GifList;
