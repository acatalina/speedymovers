import React from 'react';

const Quote = ((props) => {
  return (
    <a className={`quote button ${props.isHidden}`} 
      onClick={props.quoteClickHandler}
      href={`#contact`}
    >get a quote
    </a>
  );
});

export default Quote;