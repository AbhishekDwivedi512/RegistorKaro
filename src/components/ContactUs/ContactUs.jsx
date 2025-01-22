import React from 'react';
import './ContactUs.css';
import { FaCheckCircle,FaApple,FaPlay} from "react-icons/fa";
export const contactus = () => {
  return (
    <section className="faq">
      <h2 className="faq-title">Frequent Ask Questions</h2>
      <div className="faq-list">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="faq-item">
            <p>Can I recover deleted files from desktop with this software?</p>
            <span>&gt;</span>
          </div>
        ))}
      </div>
      <button className="faq-button">Show more →</button>
      <section className="mobile-app">
      <div className="content">
        <h2>Manage Your Services by your Mobile Phone</h2>
        <p>
          Download our app to manage and track your services. Our app enables you
          to stay in touch with our experts and aids you in tracking your
          progress.
        </p>
        <div className="app-links">
          <button className="app-store"><FaApple/>Get it on App Store</button>
          <button className="google-play"><FaPlay/>Get it on Google Play</button>
        </div>
      </div>
      <div className="mobile-images">
        {/* Add mobile mockup images */}
        <img
          src="./assets/mobile2.png"
          alt="Mobile Mockup 1"
          className="mobile-image1"
        />
        <img
          src="./assets/mobile1.png"
          alt="Mobile Mockup 2"
          className="mobile-image"
        />
      </div>
    </section>
    <section class="stats-section">
  <p class="stats-title">WHY REGISTER KARO</p>
  <h2 class="stats-heading">Some Numbers are Important</h2>
  <div class="stats-container">
    <div class="stat-item">
      <h3>1M<span>+</span></h3>
      <p>CUSTOMERS</p>
    </div>
    <div class="stat-item">
      <h3>12<span>+</span></h3>
      <p>YEARS OF EXCELLENCE</p>
    </div>
    <div class="stat-item">
      <h3>41<span>+</span></h3>
      <p>R&D ENGINEERS</p>
    </div>
    <div class="stat-item">
      <h3>78<span>+</span></h3>
      <p>COUNTRIES</p>
    </div>
    <div class="stat-item">
      <h3>3287<span>+</span></h3>
      <p>PARTNERS</p>
    </div>
    <div class="stat-item">
      <h3>41<span>+</span></h3>
      <p>AWARDS RECEIVED</p>
    </div>
  </div>
</section>
      <section className="digital-reality">
      <h5>1% OF THE INDUSTRY</h5>
      <h2 className="digital-title">Welcome to your new digital reality. Now.</h2>
      <div className="email-input">
        <input type="email" placeholder="Enter Your Email" />
        <button>Submit</button>
      </div>
      <ul className="benefits">
        <li><FaCheckCircle className='iconcheck'/>Instant results</li>
        <li><FaCheckCircle className='iconcheck'/>User-friendly interface</li>
        <li><FaCheckCircle className='iconcheck'/>Personalized customization</li>
      </ul>
      
    </section>
    <div className="partners">
    <img src="./assets/coinbase.png" alt="Coinbase" />
    <img src="./assets/spotify.png" alt="Spotify" />
    <img src="./assets/slack.png" alt="Slack" />
    <img src="./assets/dropbox.png" alt="Dropbox" />
    <img src="./assets/webflow.png" alt="Webflow" />
    <img src="./assets/zoom.png" alt="Zoom" />
  </div>
    </section>
    
  );
};
export default contactus;