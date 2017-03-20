import React from 'react';

const FormMovers = ((props) => {
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
      <input type="text" name="postCodeFrom" required="required" 
        placeholder="post code from" value={props.postCodeFrom}>
      </input>
      <input type="text" name="postCodeTo" required="required" 
        placeholder="post code to" value={props.postCodeTo}>
      </input>
      <input type="number" name="nOfBedrooms" required="required" 
        placeholder="number of bedrooms" value={props.nOfBedrooms}>
      </input>
      <input type="number" name="nOfItems" required="required" 
        placeholder="number of items" value={props.nOfItems}>
      </input>
      <input type="date" name="dateFor" required="required" 
        placeholder="request date" value={props.dateFor}>
      </input>
      <textarea name="message" required="required" 
        placeholder="your message" value={props.message}>
      </textarea>
    </div>
  );
});

export default FormMovers;