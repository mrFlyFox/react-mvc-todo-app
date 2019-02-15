import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { onCompleted } = this.props;
    return (
      <input
        className="App-input-checkbox"
        onClick={onCompleted}
        type="checkbox"
      />
    );
  }
}
Checkbox.propTypes = {
  onChecked: PropTypes.func.isRequired
};
Checkbox.defaultProps = {
  onChecked: () => ({})
};

export default Checkbox;
