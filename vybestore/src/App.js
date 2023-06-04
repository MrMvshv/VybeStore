import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Playlists from './components/playlists';
import Footer from './components/footer';
//import SearchResult from './components/searchResult'; 
import Search from './components/search';
import axios from 'axios';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

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

  const handleItemChecked = (item, isChecked) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    }
  };

  const handleProcessSelectedItems = () => {
    console.log("selected items:");
    console.log(selectedItems);
  }

  return (
    <div className="App">
	  <Header />
    <Search onSearchResults={handleSearchResults} />
	  <Playlists searchResults={searchResults} onItemChecked={handleItemChecked} />
    <div className="selected-items">
        <h3>Selected Items:</h3>
        {selectedItems.map((item) => (
          <div key={item.id.videoId}>
            <p>Title: {item.snippet.title}</p>
            <p>Channel: {item.snippet.channelTitle}</p>
            <p>Description: {item.snippet.description}</p>
          </div>
        ))}
        {selectedItems.length > 0 && (
          <button onClick={handleProcessSelectedItems} className='btn'>Process Selected Items</button>
        )}
      </div>
	  <Footer />
    </div>
  );
}

export default App;
