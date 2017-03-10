const React = require('react');

function FormContact(state) {
  if (state === "quote") return null;

  return (
    <div className="form">
      <input type="text" name="name" placeholder="your name"></input>
      <input type="email" name="email" placeholder="your email"></input>
      <input type="tel" name="tel" placeholder="telephone"></input>
      <textarea name="message" placeholder="your message"></textarea>
    </div>
  );
}


module.exports = FormContact;