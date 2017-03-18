const React = require('react');

function FormStorage() {
  return (
    <div className="form">
      <input type="text" name="name" placeholder="your name"></input>
      <input type="email" name="email" placeholder="your email"></input>
      <input type="tel" name="tel" placeholder="telephone"></input>
      <input type="date" name="datefor" placeholder="request date"></input>
      <select>type of storage
        <option value="home">home storage</option>
        <option value="document">document storage</option>
        <option value="commercial">commercial storage</option>
      </select>
      <select>size of unit
        <option value="15">15 sq ft (walk in wardrobe)</option>
        <option value="20">20 sq ft (2 telephone boxes)</option>
        <option value="25">25 sq ft (standard garden shed)</option>
        <option value="30">30 sq ft</option>
        <option value="35">35 sq ft (studio flat contents)</option>
        <option value="40">40 sq ft (large garden shed)</option>
        <option value="50">50 sq ft (transit van / 1 bed flat contents)</option>
        <option value="75">75 sq ft (luton van)</option>
        <option value="100">100 sq ft (single garage / 2 bed home contents)</option>
        <option value="125">125 sq ft (3 bed home contents)</option>
        <option value="150">150 sq ft (7.5 tonne lorry)</option>
      </select>
      <textarea name="message" placeholder="your message"></textarea>
    </div>
  );
}

module.exports = FormStorage;