const React = require('react');
const Quote = require('./Quote');

var Section = React.createClass({
  getInitialState() {
    return {
      classHidden: true
    }
  },
  render() {
    return (
      <div className="section">
        <h2 className="section-title">{this.props.title}</h2>
        <div className="section-content">
          <img className="section-img" src={this.props.title + '.png'} alt="movers"/>
          <ul className="section-info">
            {this.generateInfo(this.props.info)}
          </ul>
          <Quote />
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