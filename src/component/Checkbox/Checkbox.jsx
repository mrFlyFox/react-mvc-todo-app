import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { onClick, value } = this.props;
    return (
      <input
        className="toggle"
        type="checkbox"
        onClick={onClick}
        value={value}
      />
    );
  }
}

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

Checkbox.defaultProps = {
  onClick: () => ({})
};

export default Checkbox;
