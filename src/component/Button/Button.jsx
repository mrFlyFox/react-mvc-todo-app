import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { value="Click", onSubmit } = this.props;
    return <button onSubmit={onSubmit}>{value}</button>;
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

Button.defaultProps = {
  onClick: () => ({})
};

export default Button;
