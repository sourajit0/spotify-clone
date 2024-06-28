import React, { useState } from 'react';

const SongCard = ({ song, onClick, isCurrent }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying); 
        onClick(song); 
    };


    const coverStyle = {
        backgroundImage: `url(${song.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        paddingTop: '100%', 
        position: 'relative',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    };

    return (
        <div className={`relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer ${isCurrent ? 'border-2 border-green-500' : ''}`} onClick={handlePlay}>
            <div className="rounded-t-lg overflow-hidden" style={coverStyle}>
                {isCurrent && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                        <p>Now Playing</p>
                    </div>
                )}
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="p-4">
                <h4 className="text-lg font-semibold">{song.title}</h4>
                <p className="text-gray-400">{song.artist}</p>
            </div>
        </div>
    );
};

export default SongCard;
