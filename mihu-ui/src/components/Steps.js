import React from 'react';
function Steps() {
  return (
    <section className="steps-section">
      <div className="step reverse">
        <div className="step-image">
          <div className="circle-bg-out"></div>
          <div className="circle-bg-in"></div>
          <img src="/assets/step1.png" alt="Personalizing your template" />
        </div>
        <div className="step-text">
          <h3>Adding photos and name to the template</h3>
          <p>
            Users can easily add photos and their name to the already created template,
            making every greeting truly unique and personal. It’s the perfect way to add
            your special touch without any hassle.
          </p>
        </div>
      </div>
      <div className="step">
        <div className="step-image">
          <div className="circle-bg-out"></div>
          <div className="circle-bg-in"></div>
          <img src="/assets/step2.png" alt="Create multiple accounts" />
        </div>
        <div className="step-text">
   <h3>Create more than one account</h3>
            <p>
            Craft distinct experiences by creating multiple accounts. Whether it’s for
            your personal memories or professional branding, you can easily switch and
            customize each one.
          </p>
        </div>
      </div>
      <div className="step reverse">
        <div className="step-image">
          <div className="circle-bg-out"></div>
          <div className="circle-bg-in"></div>
          <img src="/assets/step3.png" alt="Edit your greeting easily" />
        </div>
        <div className="step-text">
          <h3>Easy editing</h3>
        <p>
            Take full control and personalize every detail to perfection! Adjust photos,
            text, and add beautiful frames with simple taps. Your creativity, truly limitless.
          </p>
        </div>
      </div>
      <div className="step">
        <div className="step-image">
          <div className="circle-bg-out"></div>
          <div className="circle-bg-in"></div>
          <img src="/assets/step4.png" alt="Share your greeting" />
        </div>
        <div className="step-text">
       <h3>Easy to share with family and friends</h3>
              <p>
            Sharing your beautifully crafted greetings is just a tap away! Send your
            personalized creations directly to all your loved ones across your favorite
            social apps and messaging platforms.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Steps;
