import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Playlists from './components/playlists';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
	  <Header />
	  <Playlists />
	  <Footer />
    </div>
  );
}

export default App;
