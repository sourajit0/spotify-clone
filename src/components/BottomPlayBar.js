import React, { useRef, useEffect, useState } from 'react';
import { PlayIcon, PauseIcon, RewindIcon, FastForwardIcon, VolumeUpIcon } from '@heroicons/react/outline';

const BottomPlayBar = ({ song, isPlaying, setIsPlaying, setCurrentSong, songs }) => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [song, isPlaying]);

    const playSong = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pauseSong = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handleNext = () => {
        const currentIndex = songs.findIndex(s => s.id === song.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentSong(songs[nextIndex]);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        const currentIndex = songs.findIndex(s => s.id === song.id);
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentSong(songs[prevIndex]);
        setIsPlaying(true);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    const handleTimeChange = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
                <div className={`w-16 h-16 mr-2 rounded-full bg-cover bg-center ${isPlaying ? 'animate-spin-slow' : ''}`} style={{ backgroundImage: `url(${song.cover})` }}>
                    <div className="w-16 h-16 mr-4 rounded-full bg-cover bg-center relative" style={{ backgroundImage: `url(${song.cover})` }}>
                        <div className="w-4 h-4 bg-gray-800 rounded-full absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg">{song.title}</h4>
                    <p className="text-gray-400">{song.artist}</p>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-4">
                    <RewindIcon className="h-6 w-6 cursor-pointer hover:text-green-500" onClick={handlePrev} />
                    {isPlaying ? (
                        <PauseIcon className="h-8 w-8 cursor-pointer hover:text-green-500" onClick={pauseSong} />
                    ) : (
                        <PlayIcon className="h-8 w-8 cursor-pointer hover:text-green-500" onClick={playSong} />
                    )}
                    <FastForwardIcon className="h-6 w-6 cursor-pointer hover:text-green-500" onClick={handleNext} />
                </div>
                <div className="flex items-center space-x-2">
                    <span>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleTimeChange}
                        className="w-64"
                    />
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <VolumeUpIcon className="h-6 w-6" />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-32"
                />
            </div>
            <audio ref={audioRef} src={song.src}></audio>
        </div>
    );
};

export default BottomPlayBar;
