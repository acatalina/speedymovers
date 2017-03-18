const React = require('react');

var Quote = React.createClass({
  render() {
    return (
      <button className={`quote button ${this.props.isHidden}`} href="#">
        get a quote
      </button>
    );
  }
});

module.exports = Quote;