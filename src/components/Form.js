const React = require('react');
const Animate = require('react-addons-css-transition-group');
const SelectWhich = require('./SelectWhich');
const FormContact = require('./FormContact');
const FormMovers = require('./FormMovers');
const FormStorage = require('./FormStorage');
const FormCourier = require('./FormCourier');
// const Animate = require('react-addons-css-transition-group');
require('./css/forms.css');

var Form = React.createClass({
  getInitialState() {
    return {
      contactorquote: 'contact',
      whichForm: '',
      name: '',
      email: '',
      tel: '',
      message: ''
    };
  },
  render() {
    return (
      <form className="forms" onChange={this.onChangeInfoHandler} method="POST" action="http://formspree.io/ac.carrasco@gmail.com">
        <select onChange={this.contactOrQuoteHandler}>
          <option value="contact">I would like to contact Speedy Movers</option>
          <option value="quote">I would like a quote</option>
        </select>
        {FormContact(this.state.contactorquote)}
        {this.whichSpeedy(this.state.contactorquote)}
        {this.formSelect(this.state.whichForm)}
        <button type="submit">Send</button>
      </form>
    );
  },
  contactOrQuoteHandler(event) {
    if (event.target.value === "quote") {
      this.setState({
        contactorquote: "quote",
        whichForm: "removals"
      });
    } else {
      this.setState({
        contactorquote: "contact",
        whichForm: ""
      });
    }
  },
  whichSpeedy(state) {
    if (state === "contact") return null;

    return (
        <select onChange={this.onChangeWhichForm} className="whichspeedy">
          <option value="removals">from Speedy Removals</option>
          <option value="storage">from Speedy Storage</option>
          <option value="courier">from Speedy Couriers</option>
        </select>
    );
  },
  formSelect(state) {
    if (state === "") return null;

    if (state === "movers") {
      return (
        <FormMovers />
      );
    } else if (state === "storage") {
      return (
        <FormStorage />
      );
    }

    return (
      <FormCourier />
    );
  },
  onChangeWhichForm(event) {
    this.setState({
      whichForm: event.target.value,
    });
  },
  onChangeInfoHandler(event) {
    let target = event.target.name;
    
    this.setState({
      [target]: event.target.value
    });
  }
});

module.exports = Form;