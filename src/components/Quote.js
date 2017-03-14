const React = require('react');

var Quote = React.createClass({
  render() {
    return (
      <a className={'quote ' + this.props.isHidden} href="#">
        get a quote
      </a>
    );
  }
});

module.exports = Quote;