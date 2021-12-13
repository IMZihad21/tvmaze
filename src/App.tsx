import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DetailedShows from './components/Shows/DetailedShows/DetailedShows';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:showID" element={<DetailedShows />} />
      </Routes>
    </>
  );
}

export default App;
