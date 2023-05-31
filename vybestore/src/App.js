import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Playlists from './components/playlists';
import Footer from './components/footer';
import Search from './components/search';
import axios from 'axios';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (searchTerm) => {
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: searchTerm,
          part: 'snippet',
          key: 'AIzaSyCdwv86TUwT3h7c0bv2RCQNy8gmSXtXJzU',
          type: 'playlist',
          maxResults: 7,
        },
      })
      .then((response) => {
        setSearchResults(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };

  return (
    <div className="App">
	  <Header />
    <Search onSearchResults={handleSearchResults} />
	  <Playlists searchResults={searchResults} />
	  <Footer />
    </div>
  );
}

export default App;
