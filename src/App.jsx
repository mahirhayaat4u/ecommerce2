import React from "react";
import './index.css';
import Home from './home/Home.jsx';
import Footer from './components/Footer.jsx';
import Support from './components/SupportSection.jsx';

const App = () => {
  return (
    <div>
      <Home />
      <Support />
  <Footer />
    </div>
  );
};

export default App;