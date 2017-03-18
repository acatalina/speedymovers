const React = require('react');

var Quote = React.createClass({
  render() {
    return (
      <a className={`quote button ${this.props.isHidden}`} 
        onClick={this.props.quoteClickHandler}
        href={`#contact`}
      >
        get a quote
      </a>
    );
  }
});

module.exports = Quote;