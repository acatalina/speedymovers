const React = require('react');
const Form = require('./components/Form');
const Section = require('./components/Section');
const Quote = require('./components/Quote');
const Contact = require('./components/Contact');
const INFO = require('./INFO');
import {goToTop} from 'react-scrollable-anchor';
require('./App.css');
require('normalize.css');
require('./components/css/content.css');
require('font-awesome/css/font-awesome.css');

var App = React.createClass({
  getInitialState() {
    return {
      logoClass: 'speedy-logo',
      info: INFO
    }
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll(event) {
    let shrinkOn = 300;
    let distanceY = window.pageYOffset || document.documentElement.scrollTop;

      if (distanceY > shrinkOn) {
        this.setState({
          logoClass: 'speedy-logo-smaller'
        });
      } else {
        this.setState({
          logoClass: 'speedy-logo'
        });
      }
  },
  render() {
    return (
      <div className="App">
        <header className="speedy-header">
          <img src="logo.svg" alt="Speedy Movers" 
            className={this.state.logoClass} 
            onScroll={this.handleScroll}
          />
          <nav>
            <a className="nav-item" onClick={goToTop}>Movers</a>
            <a className="nav-item" href="#storage">Storage</a>
            <a className="nav-item" href="#courier">Courier</a>
          </nav>
        </header>
        <main className="content-wrapper">
          <div className="sections-wrapper">
            {this.generateSections(this.state.info)}
          </div>
          <div className="sections-wrapper">
            <Quote isHidden="quote-desktop" />
            <Quote isHidden="quote-desktop"/>
            <Quote isHidden="quote-desktop"/>
          </div>
          <Contact />
        </main>
        <footer className="footer">
          <div className="footer-contactdetails">
            <span>Speedy Movers</span>
            <span>Building 24a Hindley Business Centre</span>
            <span>Prospect Mill</span>
            <span>WN2 2PA</span>
            <span>07923 953034</span>
            <span>speedystorage7@gmail.com</span>
          </div>
          <p className="created">Coded by <a href="https://github.com/acatalina">
          Drasek</a></p>
        </footer>
      </div>
    );
  },
  generateSections(state) {
    return state.sections.map(function(section, i) {
      return (
        <Section key={i} title={section} info={state[section]} />
      );
    });
  }
});

export default App;