import React from 'react';
import Section from './Section';
import Contact from './Contact';
import Quote from './Quote';

const Sections = ((props) => {
  return (
    <main className="content-wrapper">
      <section className="sections-wrapper">
        {generateSections(props)}
      </section>
      <nav className="sections-wrapper">
        {generateQuoteDesktop(props)}
      </nav>
      <Contact 
        contact={props.contact} 
        whichForm={props.whichForm}
        contactHandler={props.contactHandler}
        whichFormHandler={props.whichFormHandler}
      />
    </main>
  );
});

function generateSections(props) {
  return props.info.sections.map((section, i) => {
    return (
      <Section key={i} title={section} 
        info={props.info[section]} 
        quoteClickHandler={props.quoteClickHandler}
      />
    );
  });
}

function generateQuoteDesktop (props) {
  return props.info.sections.map((section, i) => {
    return (
      <span key={i} className="section padding quote-desktop">
        <Quote isHidden="quote-desktop" 
          quoteClickHandler={props.quoteClickHandler.bind(null, section)}
        />
      </span>
    );
  });
}

export default Sections;