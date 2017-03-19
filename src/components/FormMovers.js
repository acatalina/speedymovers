const React = require('react');

function FormMovers(props) {
  return (
    <div className="form">
      <input type="text" name="name" required="required" placeholder="your name"></input>
      <input type="email" name="email" required="required" placeholder="your email"></input>
      <input type="tel" name="tel" required="required" placeholder="telephone"></input>
      <input type="text" name="postCodeFrom" required="required" placeholder="post code from"></input>
      <input type="text" name="postCodeTo" required="required" placeholder="post code to"></input>
      <input type="number" name="nOfBedrooms" required="required" placeholder="number of bedrooms"></input>
      <input type="number" name="numberOfItems" required="required" placeholder="number of items"></input>
      <input type="date" name="dateFor" required="required" placeholder="request date"></input>
      <textarea name="message" required="required" placeholder="your message"></textarea>
    </div>
  );
}

module.exports = FormMovers;