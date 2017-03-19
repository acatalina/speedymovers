const React = require('react');
const Quote = require('./Quote');
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

configureAnchors({offset: -86});

var Section = React.createClass({
  getInitialState() {
    return {
      classHidden: true
    }
  },
  render() {
    return (
      <div className="section">
        <ScrollableAnchor id={this.props.title}>
          <h2 className="section-title">{this.props.title}</h2>
        </ScrollableAnchor>
        <div className="section-content">
          <img className="section-img" src={this.props.title + '.png'} alt="movers"/>
          <ul className="section-info">
            {this.generateInfo(this.props.info)}
          </ul>
          <Quote quoteClickHandler={this.props.quoteClickHandler.bind(null, this.props.title)} 
            isHidden={'quote-phone'}
          />
        </div>
      </div>
    );
  },
  generateInfo(info) {
    return info.map(function(elem, i) {
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
});

module.exports = Section;