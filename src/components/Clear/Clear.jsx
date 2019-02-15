import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clear extends Component {
  
  render() {
    const {
      value = 'Clear completed',
      completed = false,
      onClear,
      todoList
    } = this.props;
    return (
      todoList && todoList.length > 0 && (
        <div className="clear-completed">
          <button onClick={onClear}>{value}</button>
        </div>
      )
    );
  }
}

Clear.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

Clear.defaultProps = {
  onClick: () => ({})
};

export default Clear;