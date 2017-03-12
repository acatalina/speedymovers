const React = require('react');
const Quote = require('./Quote');
const Animate = require('react-addons-css-transition-group');

var Storage = React.createClass({
  getInitialState() {
    return {
      classHidden: true
    }
  },
  render() {
    return (
      <div className="section">
        <h2 className="section-title">storage</h2>
        <div className="section-content">
          <img className="section-img" src='' alt="storage"/>
          <ul className="section-info">
            <li>home & office</li>
            <li>documents & small box</li>
            <li>discounts for moving</li>
            <li>based in the north west</li>
            <li>prices from £1.50 per sq ft</li>
          </ul>
          <Quote />
        </div>
      </div>
    );
  }
});

module.exports = Storage;