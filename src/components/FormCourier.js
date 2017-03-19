import React from 'react';

const FormCourier = ((props) => {
  return (
    <div className="form">
      <input type="text" name="name" required="required" 
        placeholder="your name" value={props.name}>
      </input>
      <input type="email" name="email" required="required"
        placeholder="your email" value={props.email}>
      </input>
      <input type="tel" name="tel" required="required"
        placeholder="telephone" value={props.tel}>
      </input>
      <input type="postcode" name="postcodefrom" required="required"
        placeholder="post code from" value={props.postCodeFrom}>
      </input>
      <input type="postcode" name="postcodeto" required="required" 
        placeholder="post code to" value={props.postCodeTo}>
      </input>
      <input type="number" name="numberofitems" required="required"
        placeholder="number of items" value={props.numberOfItems}>
      </input>
      <input type="date" name="datefor" required="required"
        placeholder="request date" value={props.datefor}>
      </input>
      <textarea name="message" required="required" 
        placeholder="your message" value={props.message}>
      </textarea>
    </div>
  );
});

export default FormCourier;