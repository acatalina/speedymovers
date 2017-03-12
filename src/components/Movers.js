const React = require('react');
const Quote = require('./Quote');
const Animate = require('react-addons-css-transition-group');

var Movers = React.createClass({
  getInitialState() {
    return {
      classHidden: true
    }
  },
  render() {
    return (
      <div className="section">
        <h2 className="section-title">movers</h2>
        <div className="section-content">
          <img className="section-img" src='' alt="movers"/>
          <ul className="section-info">
            <li>residential & commercial</li>
            <li>nationwide & european</li>
            <li>packing & wrapping service</li>
            <li>prices from £145*
              <span>*one bed flat move within 20 miles</span>
            </li>
            <li>price match guarantee</li>
          </ul>
          <Quote />
        </div>
      </div>
    );
  }
});

module.exports = Movers;