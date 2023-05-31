import React, { useState } from 'react';
import './search.css';

function Search({ onSearchResults }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	  };
	
	const handleSearch = () => {
		onSearchResults(searchTerm);
	  };
	
	return (
			<div className="search-bar">
				<input
				  type="text"
				  placeholder="Search"
				  value={searchTerm}
				  onChange={handleInputChange}
				/>
      			<button type="submit" onClick={handleSearch}>
        			<i className="fa fa-search"></i>
      			</button>
    		</div>
	)
}

export default Search