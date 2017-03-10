const React = require('react');

const SelectWhich = React.createClass({
  render() {
    if (this.props.contactorquote === "contact") return null;

    return (
      <select className="whichspeedy">
        <option value="removals">from Speedy Removals</option>
        <option value="storage">from Speedy Storage</option>
        <option value="courier">from Speedy Couriers</option>
      </select>
    );
  }
});

module.exports = SelectWhich;