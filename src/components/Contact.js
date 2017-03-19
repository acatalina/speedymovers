const React = require('react');
const Form = require('./Form');
import ScrollableAnchor,{configureAnchors} from 'react-scrollable-anchor';

// configureAnchors({offset: -57});

var Contact = React.createClass({
  render() {
    return (
      <section className="contact">
      <ScrollableAnchor id="contact">
        <Form contact={this.props.contact} 
          whichForm={this.props.whichForm}
          contactHandler={this.props.contactHandler}
          whichFormHandler={this.props.whichFormHandler}
        />
      </ScrollableAnchor>
        <section className="contact-speedy">
          <a className="contact-tel button" href="tel:07923953034">
            <span>call us now</span>
            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
            <span className="contact-tel-span">on 07923 953034</span>
          </a>
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
        </section>
      </section>
    );
  }
});

module.exports = Contact;