import React from "react";
import "./Home.css";
import { FaSearch, FaStar,FaYoutube,} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src="/assets/logo1.png" alt="RegisterKaro"  />
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/blog">Blog</a>
          <a href="/contactus">Contact Us</a>
          <a href="/aboutus">About Us</a>
          <FaSearch className="search-icon" />
          <button className="expert-button">Talk An Expert</button>
        </nav>
      </header>

      {/* Main Section */}
      <section className="main">
        <div className="content">
          <div className="rating">
            <FaStar className="star-icon" />
            <span>Google Rating</span>
            <span>★★★★★</span>
          </div>
          <h1>Your trusted partner for compliance business needs</h1>
          <p>
            An online business compliance platform that helps entrepreneurs and
            other individuals with various registrations, tax filings, and other
            legal matters.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span>4.5+</span>
              <p>Customer Rating</p>
            </div>
            <div className="stat-item">
              <span>20,000+</span>
              <p>Clients</p>
            </div>
            <div className="stat-item">
              <span>99.8%</span>
              <p>Financial Stability</p>
            </div>
          </div>
          <div className="action-buttons">
            <button className="talk-expert">Talk An Expert</button>
              <p className="see-how"><FaYoutube className="video-icon"/>See how it works</p>
          </div>
        </div>
        <div className="illustration">
          <img src="/assets/illustratiornew.png" alt="Business Illustration" />
        </div>
      </section>
      {/* Partners Section */}
      <section className="partners">
        <h2>Trusted By Over 100+ Startups and freelance businesses</h2>
        <div className="logos">
          <img src="/assets/oracle.png" alt="Oracle" />
          <img src="/assets/morpheus.png" alt="Morpheus" />
          <img src="/assets/samsung.png" alt="Samsung" />
          <img src="/assets/monday.png" alt="Monday" />
          <img src="/assets/segment.png" alt="Segment" />
        </div>
      </section>
    </div>
  );
};

export default Home;
