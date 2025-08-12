import React from 'react';
function Highlights() {
  return (
    <section className="highlight-section" id="services">
      <div className="container highlight-grid">
        <div className="highlight-left">
          <div className="highlight-box">
            <div className="circle">1</div>
            <div>
              <h3>Many categories</h3>             
                <p>Many categories of templates for you to choose what you need</p>
            </div>
          </div>

          <div className="highlight-box">
            <div className="circle">3</div>
            <div>
                 <h3>Easy editing</h3>
                  <p>Easily modify templates to suit your taste.</p>
            </div>
          </div>
        </div>
        <div className="highlight-center">
          <div className="circle-bg-outer"></div>
          <div className="circle-bg-inner"></div>
          <img
            src="/assets/second.png.png"
            alt="App preview on phone"
            className="highlight-phone"
          />
        </div>
        <div className="highlight-right">
          <div className="highlight-box">
            <div className="circle">2</div>
            <div>
     <h3>Easy to use</h3>
             <p>Simple interface and clear action buttons</p>
            </div>
          </div>

          <div className="highlight-box">
            <div className="circle">4</div>
            <div>
                 <h3>Saving your favorite</h3>
                           <p>Easily save the templates you like.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Highlights;
