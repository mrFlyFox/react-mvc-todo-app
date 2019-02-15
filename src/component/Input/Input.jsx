import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    return <input type="text" {...this.props} />;
  }
}

Input.propTypes = {
  onClick: PropTypes.func.isRequired
};

Input.defaultProps = {
  onClick: () => ({})
};

export default Input;
