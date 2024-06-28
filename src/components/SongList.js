import React from 'react';
import SongCard from './SongCard';

const SongList = ({ songs, selectSong, currentSongId }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {songs.map(song => (
                <SongCard
                    key={song.id}
                    song={song}
                    onClick={selectSong}
                    isCurrent={song.id === currentSongId}
                />
            ))}
        </div>
    );
};

export default SongList;
