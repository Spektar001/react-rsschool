import React from 'react';
import './App.css';
import Navigation from './Navigation';
import ProductsPage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="container">
            <Navigation />
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
