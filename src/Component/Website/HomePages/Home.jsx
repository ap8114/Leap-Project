import React from 'react'
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './Website.css'; // Assuming you have a CSS file for styling
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import FooterSection from './FooterSection';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    return (
        <>
            <div className="website-container">
                {/* Navigation */}
               <Header />

                {/* Hero Section */}
              <HeroSection />

                {/* Features & Demo Section */}
              <FeaturesSection />

                {/* Footer */}
              <FooterSection />

                {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#f76b1c] text-white p-3 rounded-full shadow-lg hover:bg-[#f76b1c] transition-colors cursor-pointer"
            >
                <i className="fas fa-chevron-up"></i>
            </button>
            
            </div>
            {/* End of website container */}
        </>
    )
}

export default Home
