// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './components/pages/menu/MenuPage';
import HomePage from './components/pages/home/homepage/HomePage';
import AboutPage from './components/pages/about/AboutPage';

const App: React.FC = () => {

  return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/menu" element={<MenuPage />} /> 
            <Route path="/about" element={<AboutPage />} /> 
          </Routes>
        </div>
      </Router>
  );
}

export default App;