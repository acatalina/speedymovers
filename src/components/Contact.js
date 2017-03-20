import React from 'react';
import Form from'./Form';
import ContactButtons from './ContactButtons';
import ScrollableAnchor from 'react-scrollable-anchor';

const Contact = ((props) => {
  return (
    <ScrollableAnchor id="contact">
      <section className="contact">
        <Form contact={props.contact} 
          whichForm={props.whichForm}
          contactHandler={props.contactHandler}
          whichFormHandler={props.whichFormHandler}
        />
      <ContactButtons />
      </section>
    </ScrollableAnchor>
  );
});

export default Contact;