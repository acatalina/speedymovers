import React from 'react';
import Quote from './Quote';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

configureAnchors({offset: -86});

const Section = ((props) => {
  return (
    <div className="section">
      <ScrollableAnchor id={props.title}>
        <h2 className="section-title">{props.title}</h2>
      </ScrollableAnchor>
      <div className="section-content">
        <img className="section-img" src={props.title + '.png'} alt={props.title}/>
        <ul className="section-info">
          {generateInfo(props.info)}
        </ul>
        <Quote quoteClickHandler={props.quoteClickHandler.bind(null, props.title)} 
          isHidden={'quote-phone'}
        />
      </div>
    </div>
  );
});

function generateInfo(info) {
  return info.map((elem, i) => {
    if (Array.isArray(elem)) {
      return (
        <li key={i}>{elem[0]}<span>{elem[1]}</span></li>  
      );
    }
    return (
      <li key={i}>{elem}</li>
    );
  });
}

export default Section;