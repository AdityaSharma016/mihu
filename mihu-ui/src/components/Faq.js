import React, { useEffect } from 'react';

function FAQ() {
  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        faqItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    const backToTopBtn = document.querySelector('.back-to-top');
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 150) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="faq-section" id="contact">
      <div className="faq-container">
        <div className="faq-left">
          <h2>FAQ</h2>
          <p className="p1">Frequently asked questions</p>
          <p>And if you have any other questions</p>
          <button className="contact-btn">Contact us</button>
        </div>
        <div className="faq-right">
          <div className="faq-item">
            <div className="faq-question">
              <span>01</span> Is the Mihu app free to download and use?
              <span className="arrow">&#9662;</span>
            </div>
            <div className="faq-answer">
             Answer 1 .
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>02</span> Can I share quotes to social media platforms?
              <span className="arrow">&#9662;</span>
            </div>
            <div className="faq-answer">
              Answer 2.
            </div>
          </div>

          <div className="faq-item active">
            <div className="faq-question">
              <span>03</span> Can I use Mihu to send greetings for holidays?
              <span className="arrow">&#9652;</span>
            </div>
            <div className="faq-answer">
              Answer 3.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <span>04</span> How can I find quotes for specific occasions?
              <span className="arrow">&#9662;</span>
            </div>
            <div className="faq-answer">
            Answer 4.
            </div>
          </div>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>^</button>
      </div>
    </section>
  );
}

export default FAQ;
