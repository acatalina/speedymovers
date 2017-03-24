import React from 'react';
import Quote from './Quote';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

configureAnchors({offset: -86});

const Section = ((props) => {
  return (
    <section className="section">
      <ScrollableAnchor id={props.title}>
        <h2 className="section-title">{props.title}</h2>
      </ScrollableAnchor>
      <div className="section-content">
        <img className="section-img" src={props.title + '.jpg'} alt={props.title}/>
        <ul className="section-info">
          {generateInfo(props.info)}
        </ul>
        <Quote quoteClickHandler={props.quoteClickHandler.bind(null, props.title)} 
          isHidden={'quote-phone'}
        />
      </div>
    </section>
  );
});

function generateInfo(info) {
  return info.map((elem, i) => {
    if (Array.isArray(elem)) {
      return (
        <li key={i}><h3>{elem[0]}</h3><h4>{elem[1]}</h4></li>  
      );
    }
    return (
      <li key={i}><h3>{elem}</h3></li>
    );
  });
}

export default Section;