import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MoviesSection from './Components/MoviesSection';
import WatchedMovies from './Components/WatchedMovies';
import MoviesDetails from './Components/MoviesDetails'; 

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='content'>
      <MoviesDetails />
      <MoviesSection />
      </div>

      <WatchedMovies />


    </div>
  );
}

export default App;
