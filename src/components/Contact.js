const React = require('react');
const Form = require('./Form');
require('./css/contact.css')

var Contact = React.createClass({
  render() {
    return (
      <div className="contact">
        <Form />
        <div className="contact-speedy">
          <a className="contact-tel" href="tel:07923953034">call us now on 07923 953034</a>
          <a className="contact-links" href="https://www.facebook.com/Speedy-Movers-Wigan-1646450355572387/">
          Follow us on<span>Facebook</span>
          </a>
          <a className="contact-links" href="https://twitter.com/speedym2">Follow us on
          <span>Twitter</span></a>
        </div>
      </div>
    );
  }
});

module.exports = Contact;