const React = require('react');
const Form = require('./Form');
import ContactButtons from './ContactButtons';
import ScrollableAnchor from 'react-scrollable-anchor';

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
      <ContactButtons />
      </section>
    );
  }
});

module.exports = Contact;