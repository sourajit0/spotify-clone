import React from 'react';

const SongItem = ({ song, onClick }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer" onClick={onClick}>
            <img src={song.cover} alt={song.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h4 className="text-lg font-semibold">{song.title}</h4>
                <p className="text-gray-400">{song.artist}</p>
            </div>
        </div>
    );
};

export default SongItem;
