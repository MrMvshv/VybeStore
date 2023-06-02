import React from 'react'
import './playlists.css'

function Playlists({ searchResults }) {
	searchResults.map((result) => console.log(result));
	return (
	  <div className="playlists">
		{searchResults.map((result) => (
		  <div className="result-item" key={result.id.videoId}>
			<h5 className='result-title'>Title:{result.snippet.title}</h5>
			<h7 className='result-channel'>Channel:{result.snippet.channelTitle}</h7>
			<p className='result-desc'>Description:{result.snippet.description}</p>
		  </div>
		))}
	  </div>
	);
  }

export default Playlists