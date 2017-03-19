const React = require('react');

const Quote = function(props) {
  return (
    <a className={`quote button ${props.isHidden}`} 
      onClick={props.quoteClickHandler}
      href={`#contact`}
    >
      get a quote
    </a>
  );
};

module.exports = Quote;