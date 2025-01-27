import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <Link to="/" className="back-home">
          <FaArrowUp className="icon-rotate" />
          <h1 className="back-text">Home</h1>
        </Link>

        <div className="profile-section">
          {/* Image Container */}
          <div className="image-container">
            <img
              src="/images/dp.png"
              alt="Profile in doorway"
              className="profile-image"
            />
          </div>

          {/* Title */}
          <h2 className="section-title">about me .</h2>

          {/* Description */}
          <div className="description">
            <p>
              Innovative and results-driven Project Architect with extensive
              experience in residential and commercial design projects. Highly
              skilled at blending cutting-edge design principles with technical
              expertise to craft spaces that resonate with people and stand the
              test of time.
            </p>
            <p>
              Skilled in computer-aided design (CAD) software, adobe suite,
              microsoft office, and construction methodologies. Bringing both
              precision and creativity to every project.
            </p>
            <p>
              Key achievements include delivering iconic developments such as
              the Midtown Tower, Residence showrooms, a dedication to
              excellence, and meticulous attention to detail. Proficient in
              design optimization, permitting, and ensuring seamless integration
              of form and function in all architectural works.
            </p>
            <p>
              Committed to fostering collaboration among multidisciplinary teams.
              Passionate about staying ahead of industry trends, exploring
              innovative design concepts, and creating spaces that connect with
              people on a deeper level. Every footprint tells a story, and the
              goal is to make each one memorable.
            </p>
          </div>
        </div>

        <div className="details-section">
          <header className="header">
            <h1 className="header-title">BATIR CARRERA</h1>
            <p className="sub-title">Project Manager | Architectural Professional</p>
            <p className="header-description">
              Innovative and detail-oriented Architectural Designer with
              experience in residential and commercial design. Expert at
              leveraging my expertise in computer-aided design (CAD) software to
              produce precise architectural layouts, drawings, and designs.
              Strong proficiency in project coordination, and construction
              methodologies. Demonstrated experience working with
              multidisciplinary teams and clients to achieve project goals.
            </p>

            {/* Contact Info */}
            <div className="contact-info">
              <div>📞 305-902-9773</div>
              <div>✉️ batir.carrera00@gmail.com</div>
              <div>📍 8888 SW 142nd Ave, Miami, FL 33186</div>
            </div>
          </header>

          {/* Other Sections */}
          <div className="grid">
            <div>
              <section className="section">
                <h2 className="section-header">EXPERIENCE</h2>
                {/* Add experience items here */}
              </section>

              <section className="section">
                <h2 className="section-header">AWARDS</h2>
                {/* Add awards here */}
              </section>
            </div>

            <div>
              <section className="section">
                <h2 className="section-header">EDUCATION</h2>
                {/* Add education details here */}
              </section>

              <section className="section">
                <h2 className="section-header">SKILLS</h2>
                {/* Add skills here */}
              </section>

              <section className="section">
                <h2 className="section-header">INTEREST</h2>
                {/* Add interests here */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
