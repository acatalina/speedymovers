import React,{Component} from 'react';
import FormContact from './FormContact';
import FormMovers from './FormMovers';
import FormStorage from './FormStorage';
import FormCourier from './FormCourier';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      tel: '',
      message: '',
      postCodeFrom: '',
      postCodeTo: '',
      nOfBedrooms: '',
      nOfItems: '',
      dateFor: '',
      sizeOfUnit: '15',
      typeOfStorage: 'home'
    }

    this.whichSpeedy = this.whichSpeedy.bind(this);
    this.formSelect = this.formSelect.bind(this);
    this.onChangeInfoHandler = this.onChangeInfoHandler.bind(this);
  }
  render() {
    return (
      <form className="forms" onChange={this.onChangeInfoHandler} 
        method="POST" action="https://formspree.io/ac.carrasco@gmail.com"
      >
        <div className="form">
          <select onChange={this.props.contactHandler} value={this.props.contact}>
            <option value="contact">I would like to contact Speedy Movers</option>
            <option value="quote">I would like a quote</option>
          </select>
          {this.whichSpeedy(this.props)}
        </div>
        {this.formSelect(this.props)}
        <input className="form-button button" type="submit" value="send"></input>
      </form>
    );
  }
  whichSpeedy(props) {
    if (props.contact === 'contact') return null;
      
    return (
      <select onChange={props.whichFormHandler} 
        className="whichspeedy" value={props.whichForm}
      >
        <option value="removals">from Speedy Removals</option>
        <option value="storage">from Speedy Storage</option>
        <option value="courier">from Speedy Couriers</option>
      </select>
    );
  }
  formSelect(props) {
    switch (props.whichForm) {
      case "removals":
        return (
          <FormMovers />
        );
      case "storage":
        return (
          <FormStorage />
        );
      case "courier":
        return (
          <FormCourier />
        );
      default:
        return (
          <FormContact />
        );
    }
  }
  onChangeInfoHandler(event) {
    event.preventDefault();
    let target = event.target.name;
    let value = event.target.value.toUpperCase();

    this.setState({
      [target]: value
    });
  }
};

export default Form;