const React = require('react');

function FormContact(props) {
  if (props === "quote") return null;

  return (
    <div className="form">
      <input type="text" name="name" required="required" placeholder="your name"></input>
      <input type="email" name="email" required="required" placeholder="your email"></input>
      <input type="tel" name="tel" required="required" placeholder="telephone"></input>
      <textarea name="message" required="required" placeholder="your message"></textarea>
    </div>
  );
};

module.exports = FormContact;