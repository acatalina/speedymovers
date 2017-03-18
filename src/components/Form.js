import React from 'react';
import FormContact from './FormContact';
import FormMovers from './FormMovers';
import FormStorage from './FormStorage';
import FormCourier from './FormCourier';
import './css/forms.css';

var Form = React.createClass({
  getInitialState() {
    return {
      name: '',
      email: '',
      tel: '',
      message: '',
      postCodeFrom: '',
      postCodeTo: '',
      noOfBedrooms: '',
      numberOfItems: '',
      dateFor: ''
    };
  },
  render() {
    return (
      <form className="forms" onChange={this.onChangeInfoHandler} method="POST" action="https://formspree.io/ac.carrasco@gmail.com">
        <select onChange={this.props.contactHandler} value={this.props.contact}>
          <option value="contact">I would like to contact Speedy Movers</option>
          <option value="quote">I would like a quote</option>
        </select>
        {FormContact(this.props.contact)}
        {this.whichSpeedy(this.props)}
        {this.formSelect(this.props)}
        <button className="form-button button" type="submit">Send</button>
      </form>
    );
  },
  whichSpeedy(props) {
    if (props.contact === "contact") return null;

    return (
        <select onChange={props.whichFormHandler} className="whichspeedy" value={props.whichForm}>
          <option value="removals">from Speedy Removals</option>
          <option value="storage">from Speedy Storage</option>
          <option value="courier">from Speedy Couriers</option>
        </select>
    );
  },
  formSelect(props) {
    const defaultDate = new Date().toLocaleDateString().split('/').reverse().join('/');

    if (props.whichForm === "") return null;

    if (props.whichForm === "removals") {
      return (
        <FormMovers defaultDate={defaultDate}/>
      );
    } else if (props.whichForm === "storage") {
      return (
        <FormStorage defaultDate={defaultDate}/>
      );
    }

    return (
      <FormCourier defaultDate={defaultDate}/>
    );
  },
  onChangeInfoHandler(event) {
    let target = event.target.name;
    
    this.setState({
      [target]: event.target.value
    });
  }
});

module.exports = Form;