const React = require('react');

function FormCourier() {
  return (
    <div className="form">
      <input type="text" name="name" placeholder="your name"></input>
      <input type="email" name="email" placeholder="your email"></input>
      <input type="tel" name="tel" placeholder="telephone"></input>
      <input type="postcode" name="postcodefrom" placeholder="post code from"></input>
      <input type="postcode" name="postcodeto" placeholder="post code to"></input>
      <input type="number" name="numberofitems" placeholder="number of items"></input>
      <input type="date" name="datefor"></input>
      <textarea name="message" placeholder="your message"></textarea>
    </div>
  );
}

module.exports = FormCourier;