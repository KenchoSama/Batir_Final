import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar component
import PageLoader from "./components/PageLoader"; // Page loader component
import About from "./components/About/About"; // About page
import "./App.css"; // General styles

// Placeholder components
const Home = () => (
  <div style={{ background: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <h1>Welcome to the Home Page</h1>
  </div>
);
const Projects = () => <div>Projects Page</div>;
const Certificates = () => <div>Certificates Page</div>;

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader when the location changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after delay
    }, 2500); // Adjust duration to match the loader animation
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      {loading && <PageLoader />}
      {!loading && (
        <>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
            </Routes>
          </div>
        </>
      )}
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
