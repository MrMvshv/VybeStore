import React from 'react'
import SearchResult from './searchResult';
import './playlists.css'

function Playlists({ searchResults, onItemChecked }) {
	searchResults.map((result) => console.log(result));
	return (
	  <div className="playlists">
		{searchResults.map((result) => (
		  <SearchResult
          key={result.id.videoId}
          result={result}
          onItemChecked={onItemChecked}
        />
		))}
	  </div>
	);
  }

export default Playlists

