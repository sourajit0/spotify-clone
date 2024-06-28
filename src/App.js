import React, { useState } from 'react';
import songs from './data/songs';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import BottomPlayBar from './components/BottomPlayBar';
import './App.css';

const App = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const selectSong = (song) => {
        setCurrentSong(song);
        setIsPlaying(true); 
    };

   
    const filteredSongs = songs.filter(song => {
        if (!searchTerm) return true; 

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseTitle = (song.title || '').toLowerCase(); 
        const lowerCaseArtist = (song.artist || '').toLowerCase(); 

        return (
            lowerCaseTitle.includes(lowerCaseSearchTerm) ||
            lowerCaseArtist.includes(lowerCaseSearchTerm)
        );
    });

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <Sidebar onSearch={setSearchTerm} />
            <div className="flex-grow p-6 pb-20 ml-64">
                <h1 className="text-3xl font-bold mb-6">Playlist</h1>
                <div className="mt-4">
                    <SongList songs={filteredSongs} selectSong={selectSong} currentSongId={currentSong?.id} />
                </div>
            </div>
            {currentSong && (
                <BottomPlayBar
                    song={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    setCurrentSong={setCurrentSong}
                    songs={songs}
                />
            )}
        </div>
    );
};

export default App;
