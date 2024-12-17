import React from "react";
import { Link } from "react-router-dom";
import "./components/styles/Navbar.css";
import ThreeBackground from "../src/components/ui/ThreeBackground";
import Home from "../src/pages/Home"
import { AppleCardsCarouselDemo } from "./pages/carousel";

function App() {
  return (
    <>
      {/* Three.js Background */}
      

      {/* Navigation Menu */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-logo">AI Journal</span>
          <Link to="/">Home</Link>
          <Link to="/daily-journal">Daily Journal</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/ai-assistant">AI Assistance</Link>
        </div>

        <div className="navbar-right">
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <button className="navbar-button">Start Writing</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4">
    
        <p className="text-gray-500 mt-2">
 
          <ThreeBackground />
        </p>
        <Home/>
  
      </main>
    </>
  );
}

export default App;
