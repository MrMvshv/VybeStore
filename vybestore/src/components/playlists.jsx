import React from 'react'
import './playlists.css'

function Playlists({ searchResults }) {
	searchResults.map((result) => console.log(result));
	return (
	  <div className="playlists">
		{searchResults.map((result) => (
		  <div key={result.id.videoId}>
			<h5>Title:{result.snippet.title}</h5>
			<h7>Channel:{result.snippet.channelTitle}</h7>
			<p>Description:{result.snippet.description}</p>
		  </div>
		))}
	  </div>
	);
  }

export default Playlists