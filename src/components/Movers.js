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
          {this.moreInfoHandler()}
          <Quote />
          <button className="quote" onClick={this.clickHandler}>More info</button>
        </div>
      </div>
    );
  },
  clickHandler() {
    this.setState({
      classHidden: !this.state.classHidden
    });
  },
  moreInfoHandler() {
    if (this.state.classHidden) { return null; }
    
    return (
      <Animate transitionName="appear-dissapear"
        transitionAppearTimeout={1000} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}
        transitionAppear={true} transitionEnter={true} transitionLeave={true}>
        
        <ul className="section-info extra-info">
          <li>residential &amp commercial</li>
          <li>nationwide &amp european</li>
          <li>packing &amp wrapping service</li>
          <li>prices from £145*
            <span>*one bed flat move within 20 miles</span>
          </li>
          <li>price match guarantee</li>
        </ul>

      </Animate>
    );
  }
});

module.exports = Movers;