import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section: Mihu branding */}
        <div className="footer-left">
          <h2 className="brand-title">Mihu</h2>
          <div className="social-icons">
            <img src="/assets/facebook.png" alt="Facebook" />
            <img src="/assets/x2.png" alt="X" />
            <img src="/assets/inst.png" alt="Instagram" />
          </div>
          <p className="copyright">
            Copyright © 2027 by<br />
            Miho. Inc. All rights<br />
            reserved.
          </p>
        </div>

        {/* Right section: Other columns */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>Contact us</h4>
           <div class="footer-contact-block">
  <div class="footer-address">
    <p>895 palm st., 1st floor</p>
    <p>San Francisco, CA15986</p>
  </div>
  <div class="footer-contact">
    <p>415-895-458</p>
    <p>Mymail@gmail.com</p>
  </div>
</div>
          </div>
          <div className="footer-column">
            <h4>Account</h4>
            <p>Create account</p>
            <p>Sign in</p>
            <p>Android app</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <p>About Mihu</p>
            <p>For Business</p>
          </div>
          <div className="footer-column">
            <h4>About us</h4>
            <p>Privacy & terms</p>
            <p>Help center</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
