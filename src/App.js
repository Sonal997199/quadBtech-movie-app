import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Movie from './components/Movie';
import MovieDetails from './components/MovieDetails';
import MovieTicket from './components/MovieTicket';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/movie_details/:id' element={<MovieDetails />} />
        <Route path='movie_ticket/:id' element={<MovieTicket />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
