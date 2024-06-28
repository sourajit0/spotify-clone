import React, { useRef } from 'react';

const Player = ({ song }) => {
    const audioRef = useRef(null);

    const playSong = () => {
        audioRef.current.play();
    };

    const pauseSong = () => {
        audioRef.current.pause();
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-lg">
            <img src={song.cover} alt={song.title} className="w-48 h-48 rounded-full mb-4" />
            <h3 className="text-white text-lg font-semibold">{song.title}</h3>
            <p className="text-gray-400">{song.artist}</p>
            <audio ref={audioRef} src={song.src} className="w-full mt-4"></audio>
            <div className="flex space-x-4 mt-4">
                <button onClick={playSong} className="bg-green-500 text-white px-4 py-2 rounded">Play</button>
                <button onClick={pauseSong} className="bg-red-500 text-white px-4 py-2 rounded">Pause</button>
            </div>
        </div>
    );
};

export default Player;
