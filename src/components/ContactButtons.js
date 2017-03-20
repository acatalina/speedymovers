import React from 'react';

const ContactButtons = () => {
  return (
    <section className="contact-speedy">
      <a className="contact-tel button" href="tel:07923953034">
        <span>call us now</span>
        <span className="contact-tel-span">on 07923 953034</span>
        <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
      </a>
      <div className="contact-links-wrapper">
        <a className="contact-links button" 
          href="https://www.facebook.com/Speedy-Movers-Wigan-1646450355572387/">
          <span>follow us</span>
          <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
        </a>
        <a className="contact-links button" 
          href="https://twitter.com/speedym2">
          <span>follow us</span>
          <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
}

export default ContactButtons;
