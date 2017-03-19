import React from 'react';
import Section from './components/Section';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import INFO from './INFO';
import {goToTop} from 'react-scrollable-anchor';
import 'normalize.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';

var App = React.createClass({
  getInitialState() {
    return {
      logoClass: 'speedy-logo',
      info: INFO,
      contact: 'contact',
      whichForm: '',
    }
  },
  componentDidMount() {
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
            {this.generateQuoteDesktop(this.state.info.sections)}
          </div>
          <Contact 
            contact={this.state.contact} 
            whichForm={this.state.whichForm}
            contactHandler={this.contactHandler}
            whichFormHandler={this.whichFormHandler}
          />
        </main>
        <Footer />
      </div>
    );
  },
  generateSections(state) {
    return state.sections.map((section, i) => {
      return (
        <Section key={i} title={section} 
          info={state[section]} 
          quoteClickHandler={this.quoteClickHandler}
        />
      );
    });
  },
  contactHandler(event) {
    if (event.target.value === 'quote') {
      this.setState({
        contact: 'quote',
        whichForm: 'removals'
      });
    } else {
      this.setState({
        contact: 'contact',
        whichForm: ''
      });
    }
  },
  generateQuoteDesktop (state) {
    return state.map((section, i) => {
      return (
        <span key={i} className="section">
          <Quote isHidden="quote-desktop" 
            quoteClickHandler={this.quoteClickHandler.bind(null, section)}
          />
        </span>
      );
    });
  },
  whichFormHandler(event) {
    this.setState({
      whichForm: event.target.value,
    });
  },
  quoteClickHandler(whichForm) {
    this.setState({ 
      contact: 'quote',
      whichForm: whichForm
    });
  }
});

export default App;