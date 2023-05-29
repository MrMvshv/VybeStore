import './App.css';
import Header from './components/header';
import Playlists from './components/playlists';
import Footer from './components/footer';
import Search from './components/search';


function App() {
  return (
    <div className="App">
	  <Header />
    <Search />
	  <Playlists />
	  <Footer />
    </div>
  );
}

export default App;
