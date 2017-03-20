import React, {Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import INFO from './INFO';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoClass: 'speedy-logo',
      info: INFO,
      contact: 'contact',
      whichForm: ''
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.quoteClickHandler = this.quoteClickHandler.bind(this);
    this.contactHandler = this.contactHandler.bind(this);
    this.whichFormHandler = this.whichFormHandler.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div className="App">
        <Header 
          logoClass={this.state.logoClass}
          handleScroll={this.handleScroll}
        />
        <Main 
          info={this.state.info} 
          sections={this.state.info.sections}
          contact={this.state.contact} 
          whichForm={this.state.whichForm}
          contactHandler={this.contactHandler}
          whichFormHandler={this.whichFormHandler}
          quoteClickHandler={this.quoteClickHandler}
        />
        <Footer />
      </div>
    );
  }
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
  }
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
  }
  whichFormHandler(event) {
    this.setState({
      whichForm: event.target.value,
    });
  }
  quoteClickHandler(whichForm) {
    this.setState({ 
      contact: 'quote',
      whichForm: whichForm
    });
  }
};

export default App;