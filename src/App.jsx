import React from "react";
import './index.css';
import Home from './home/Home.jsx';
import About  from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Product from './pages/Product.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    <About />
    <Product />
  <Footer />
    </div>
  );
};

export default App;