import React from 'react';
import songs from '../data/songs';
import SongList from './SongList';

const SearchPage = ({ searchTerm, selectSong, currentIndex }) => {
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
        <div>
            <h1 className="text-3xl font-bold mb-6">Search Results</h1>
            <div className="mt-4">
                <SongList songs={filteredSongs} selectSong={selectSong} currentIndex={currentIndex} />
            </div>
        </div>
    );
};

export default SearchPage;
