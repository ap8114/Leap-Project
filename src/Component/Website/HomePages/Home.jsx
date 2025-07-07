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
            </div>
            {/* End of website container */}
        </>
    )
}

export default Home
