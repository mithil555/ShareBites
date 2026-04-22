import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddFoodPage from './components/AddFoodPage';
import AboutPage from './components/AboutPage';
import PoliciesPage from './components/PoliciesPage';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="app-root">
      <Navbar currentPage={page} navigate={setPage} />
      {page === 'home'     && <HomePage />}
      {page === 'add'      && <AddFoodPage navigate={setPage} />}
      {page === 'about'    && <AboutPage />}
      {page === 'policies' && <PoliciesPage />}
    </div>
  );
}

export default App;
  