import React from 'react';
import './AboutUs.css';

const aboutus = () => {
  return (
    <div className="about-page">
      <section className="about-register-karo">
        <div className="content-container">
          <h3 className="welcome-text">WELCOME TO REGISTERKARO.IN</h3>
          <h1 className="main-heading">About <span>Register Karo</span></h1>
          <p className="description">
            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team that has consistently delivered on projects, thereby exceeding everyone’s expectations.
          </p>
          <p className="recommendation">
            I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="image-container">
        <img src="/assets/team-photo.png" alt="Business Illustration" />
        </div>
      </section>

      <section className="why-register-karo">
        <h3 className="subheading">WHY REGISTERKARO.IN</h3>
        <h2 className="heading">Why Choose <span>Register Karo</span></h2>
        <p className="description">
          It is with consistent services and results that build trust with the people, and that in turn helps us serve the business better.
        </p>
        <div className="features">
          <div className="feature">
            <div className="feature-icon confidential"></div>
            <h4 className="feature-title">Confidential & Safe</h4>
            <p>All your private information is safe with us</p>
          </div>
          <div className="feature">
            <div className="feature-icon no-hidden-fee"></div>
            <h4 className="feature-title">No Hidden Fee</h4>
            <p>Everything is put before you with no hidden charges or conditions</p>
          </div>
          <div className="feature">
            <div className="feature-icon happy"></div>
            <h4 className="feature-title">Guaranteed Satisfaction</h4>
            <p>We ensure that you stay 100% satisfied with our offered services</p>
          </div>
          <div className="feature">
            <div className="feature-icon Experts"></div>
            <h4 className="feature-title">Expert CA/CS Assistance</h4>
            <p>Prompt support from our in-house expert professionals</p>
          </div>
        </div>

        <section className="video-introduction">
        <div className="two-column-layout">
          <div className="video-text">
            <h1>Our Video Introductions</h1>
            <p>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
              vulputate pellentesque a diam tincidunt apis dui.
            </p>
            <div className="info-boxes">
              <div className="info-box">
                <div className="icon-circle">
                  <span role="img" aria-label="lightbulb">
                    <img src="/assets/stackanalysis.png"  className='iconlogo' alt="" />
                  </span>
                </div>
                <div>
                  <h2>Explore ideas together</h2>
                  <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
              </div>
              <div className="info-box">
                <div className="icon-circle">
                  <span role="img" aria-label="conversation">
                    <img src="/assets/bulb.png" className='iconlogo' alt="" />
                  </span>
                </div>
                <div>
                  <h2>Bring those ideas to life</h2>
                  <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="video-image">
            <img src="/assets/girl2.png" alt="Video Introduction" />
            <button className="play-button">
              <span>▶</span>
            </button>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="happy-clients">
        <h2>Our Happy Clients</h2>
        <p>
          Professionally cultivate one-to-one customer service with robust ideas.
          Dynamically innovate resource-leveling customer service for state-of-the-art
          customer service.
        </p>
        <div className="client-logos">
          {/* Add logo images dynamically here */}
        <img src="/assets/client1.png" alt="Logo 1" />
        <img src="/assets/client2.png" alt="Logo 2" />
        <img src="/assets/client3.png" alt="Logo 3" />
        <img src="/assets/client4.png" alt="Logo 4" />
        <img src="/assets/client5.png" alt="Logo 5" />
        <img src="/assets/client6.png" alt="Logo 6" />
        <img src="/assets/client7.png" alt="Logo 7" />
        <img src="/assets/client8.png" alt="Logo 8" />
        <img src="/assets/client9.png" alt="Logo 9" />
        {/* Add more logos */}
        </div>
        <button className="show-more">Show more →</button>
      </section>

      {/* Steps Section */}
      <section className="steps">
        <div className="step">
          <span role="img" aria-label="form">
          <img src="/assets/form.png" alt="form" />
          </span>
          <p>Fill up Application Form</p>
        </div>
        <div className="step">
          <span role="img" aria-label="payment">
          <img src="/assets/payment.png" alt="Payment" />
          </span>
          <p>Make Online Payment</p>
        </div>
        <div className="step">
          <span role="img" aria-label="process">
          <img src="/assets/callcenter.png" alt="callcenter" />
          </span>
          <p>Executive will Process Application</p>
        </div>
        <div className="step">
          <span role="img" aria-label="email">
          <img src="/assets/mail.png" alt="Mail" />
          </span>
          <p>Get Confirm Mail</p>
        </div>
      </section>
      </section>

    </div>
    
  );
};

export default aboutus;
