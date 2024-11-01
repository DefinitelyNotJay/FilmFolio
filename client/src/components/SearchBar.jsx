import React, { useState } from 'react';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        // Add any additional search logic here (e.g., API calls, filtering, etc.)
    };

    return (
        <div className="w-full flex items-center bg-gray-800 rounded-full border p-2 shadow-lg">
            <input
                type="text"
                className="w-full bg-gray-800 text-white placeholder-gray-400 outline-none px-3"
                placeholder="Search here"
                value={searchTerm}
                onChange={handleSearch}
            />
            <i className="fas fa-search text-gray-400 mr-2"></i> {/* Search Icon */}
        </div>
    );
}

export default SearchBar;
