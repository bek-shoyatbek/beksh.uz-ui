import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import './styles/global.css';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;