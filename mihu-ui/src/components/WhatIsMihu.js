import React from 'react';
function WhatIsMihu() {
  return (
    <section className="what-mihu" id="about">
      <div className="container what-mihu-inner">

        <div className="what-left">
          <h2>What is Mihu?</h2>
           <p>
            Sending a thoughtful greeting has never been easier thanks to Mihu.
            This straightforward app is perfect for all users, with a special focus on
            making it accessible for our parents and seniors.
            Easily create and share heartfelt wishes by customizing beautiful images and frames.
            It’s personal, delightfully simple, and crafted with love.
          </p>
        </div>
        <div className="what-right">
          <div className="video-frame">
            <img
              src="/assets/iMockup - iPhone 17.png"
              alt="App preview on phone"
            />
            <div className="play-button" aria-label="Play video">&#9658;</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhatIsMihu;
