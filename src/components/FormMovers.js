const React = require('react');

function FormMovers() {
  return (
    <div className="form">
      <input type="text" name="name" placeholder="your name"></input>
      <input type="email" name="email" placeholder="your email"></input>
      <input type="tel" name="tel" placeholder="telephone"></input>
      <input type="text" name="postCodeFrom" placeholder="post code from"></input>
      <input type="text" name="postCodeTo" placeholder="post code to"></input>
      <input type="number" name="nOfBedrooms" placeholder="number of bedrooms"></input>
      <input type="number" name="numberOfItems" placeholder="number of items"></input>
      <input type="date" name="dateFor" placeholder="request date"></input>
      <textarea name="message" placeholder="your message"></textarea>
    </div>
  );
}

module.exports = FormMovers;