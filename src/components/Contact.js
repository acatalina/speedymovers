const React = require('react');
const Form = require('./Form');
require('./css/contact.css')

var Contact = React.createClass({
  render() {
    return (
      <section className="contact">
        <Form />
        <section className="contact-speedy">
          <button className="contact-tel button" href="tel:07923953034">
            <span>call us now</span>
            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
            <span className="contact-tel-span">on 07923 953034</span>
          </button>
          <button className="contact-links button" 
            href="https://www.facebook.com/Speedy-Movers-Wigan-1646450355572387/">
            <span>follow us</span>
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          </button>
          <button className="contact-links button" 
            href="https://twitter.com/speedym2">
            <span>follow us</span>
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </button>
        </section>
      </section>
    );
  }
});

module.exports = Contact;