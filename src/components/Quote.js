import React from 'react';

const Quote = ((props) => {
  return (
    <button className={`quote button ${props.isHidden}`}>
      <a onClick={props.quoteClickHandler}
        href={`#contact`}
      >get a quote
      </a>
    </button>
  );
});

export default Quote;