import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; // Your navbar component
import PageLoader from "./components/PageLoader"; // Page loader component
import "./App.css"; // General styles

// Example components for pages
const About = () => <div>About Page</div>;
const Projects = () => <div>Projects Page</div>;
const Certificates = () => <div>Certificates Page</div>;

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader when location changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      {loading && <PageLoader />}
      <Navbar />
      <div className={`content ${loading ? "hidden" : "block"}`}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
