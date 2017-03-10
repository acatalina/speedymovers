const React = require('react');
const Storage = require('./components/Storage');
const Courier = require('./components/Courier');
const Form = require('./components/Form');
const Contact = require('./components/Contact');
const Section = require('./components/Section');
import logo from './logo.svg';
import './App.css';
require('./components/css/content.css');

var App = React.createClass({
  getInitialState() {
    return {
      sections: ['removals', 'storage', 'couriers'],
      logoClass: 'speedy-logo',
      info: {
        removals: ['residential & commercial', 'nationwide & european',
        'packing & wrapping service', 'prices from £145*', 
        '*one bed flat move within 20 miles', 'price match guarantee'],
        storage: ['residential & commercial', 'nationwide & european',
        'packing & wrapping service', 'prices from £145*', 
        '*one bed flat move within 20 miles', 'price match guarantee'],
        courier: ['residential & commercial', 'nationwide & european',
        'packing & wrapping service', 'prices from £145*', 
        '*one bed flat move within 20 miles', 'price match guarantee']
      }
    }
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll(event) {
    let shrinkOn = 300;
    let distanceY = window.pageYOffset || document.documentElement.scrollTop;

      if(distanceY > shrinkOn) {
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
          <img src={logo} alt="Speedy Movers" 
            className={this.state.logoClass} 
            onScroll={this.handleScroll}
          />
        </header>
        <main className="content-wrapper">
          <div className="sections-wrapper">
            {this.generateSections(this.state.info)}
          </div>
          <Contact />
        </main>
        <footer className="footer">
          <div className="footer-contactdetails">
            <span>Speedy Movers</span>
            <span>Building 24a Hindley Business Centre</span>
            <span>Prospect Mill</span>
            <span>WN2 2PA</span>
            <span>speedystorage7@gmail.com</span>
          </div>
          <p className="created">Coded by <a href="https://github.com/acatalina">
          Drasek</a></p>
        </footer>
      </div>
    );
  },
  generateSections(state) {
    return Object.keys(state).map(function(section, i) {
      return (
        <Section key={i} title={section} info={state[section]} />
      );
    });
  }
});

export default App;
