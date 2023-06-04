import React, { useState } from 'react';

function SearchResult({ result, onItemChecked }) {
	const [isChecked, setIsChecked] = useState(false);
  
	const handleCheckboxChange = () => {
	  setIsChecked(!isChecked);
	  onItemChecked(result, !isChecked);
	};
  
	return (
	  <div className="result-item" key={result.id.videoId}>
		<input
		  type="checkbox"
		  checked={isChecked}
		  onChange={handleCheckboxChange}
		/>
		<h5 className="result-title">Title: {result.snippet.title}</h5>
		<h7 className="result-channel">Channel: {result.snippet.channelTitle}</h7>
		<p className="result-desc">Description: {result.snippet.description}</p>
	  </div>
	);
  }
  
  export default SearchResult;