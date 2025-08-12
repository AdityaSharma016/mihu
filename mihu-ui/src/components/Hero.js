import React, { useState } from 'react';
function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoToggle = () => {
    setShowVideo((prev) => !prev);
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-inner">
          <div className="hero-left">
               <h1>
              Craft Memories, And<br />
              Greetings at a Time.<br />
              With <span>Mihu</span>
             </h1>
             <p>
              Access an array of beautiful templates to send personalized greetings.
              Built for universal appeal, perfect for sharing love to your nearest and dearest.
            </p>
            <div className="butns">
              <img
                src="/assets/phone.png"
                className="play-btn"
                alt="Download on Google Play"
              />
              <img
                src="/assets/youtube.png"
                className="yt-btn"
                alt="Watch intro video"
                onClick={handleVideoToggle}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          <div className="hero-right">
            <div className="phone-wrapper">
              <img src="/assets/2.png" className="phone-img" alt="App preview" />
              <div className="annotation top-right">
                Create and share<br />heartfelt wishes.
              </div>
              <div className="annotation bottom-left">
                 Sending<br />greetings easily.
              </div>
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <>
          <div className="video-modal-overlay" onClick={handleVideoToggle}>
            <div
              className="video-modal"
              onClick={(e) => e.stopPropagation()} 
            >
              <button className="close-btn" onClick={handleVideoToggle}>×</button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0INvoK_T0cE?autoplay=1"
                title="Mihu Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="youtube-link-container">
            <a
              href="https://www.youtube.com/watch?v=0INvoK_T0cE"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-link"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Hero;
