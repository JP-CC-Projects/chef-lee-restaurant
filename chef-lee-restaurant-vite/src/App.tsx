// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './components/pages/menu/MenuPage';
import HomePage from './components/pages/home/homepage/HomePage';

const App: React.FC = () => {

  return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/menu" element={<MenuPage />} /> 
          </Routes>
        </div>
      </Router>
  );
}

export default App;