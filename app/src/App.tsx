// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles/global.scss';

// Import components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import { Contact } from './components/contact/Contact';

// Main App component
const App: React.FC = () => {
  
  return (
    <Router>
      <div className="app">
        {/* Header component */}
        <Header />

        {/* Main content */}
        <main className="content">
          {/* Switch component to render the first matching Route */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
