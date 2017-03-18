const React = require('react');

function FormCourier(props) {
  return (
    <div className="form">
      <input type="text" name="name" required="required" placeholder="your name"></input>
      <input type="email" name="email" required="required" placeholder="your email"></input>
      <input type="tel" name="tel" required="required" placeholder="telephone"></input>
      <input type="postcode" name="postcodefrom" required="required" placeholder="post code from"></input>
      <input type="postcode" name="postcodeto" required="required" placeholder="post code to"></input>
      <input type="number" name="numberofitems" required="required" placeholder="number of items"></input>
      <input type="date" name="datefor" required="required" defaultValue={props.defaultDate} placeholder="request date"></input>
      <textarea name="message" required="required" placeholder="your message"></textarea>
    </div>
  );
}

module.exports = FormCourier;