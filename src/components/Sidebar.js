import React, { useState } from 'react';
import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/react/outline';

const Sidebar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="h-screen w-64 bg-black text-white flex flex-col p-4 fixed">
            <div className="flex flex-col items-center mb-8">
                <img src="../logo/Spotify_logo_with_text.svg" alt="Spotify Logo" className="h-10" />
            </div>
            <nav className="flex flex-col space-y-4 mb-8">
                <a href="/" className="flex items-center space-x-2 hover:text-green-500">
                    <HomeIcon className="h-6 w-6" />
                    <span>Home</span>
                </a>
                <a href="#" className="flex items-center space-x-2 hover:text-green-500">
                    <div className="flex items-center space-x-2">
                        <SearchIcon className="h-6 w-6" />
                        <input
                            type="text"
                            placeholder="Search songs..."
                            className="bg-transparent text-white outline-none"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </a>
                <a href="#" className="flex items-center space-x-2 hover:text-green-500">
                    <LibraryIcon className="h-6 w-6" />
                    <span>Your Library</span>
                </a>
            </nav>
            {/* <div className="mt-auto flex flex-col items-center">
                <div className="flex items-center space-x-2">
                    <img src="/path/to/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full" />
                    <span>Your Profile</span>
                </div>
            </div> */}
        </div>
    );
};

export default Sidebar;
