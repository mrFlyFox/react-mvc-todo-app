import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrossIcon from '../Icons/CrossIcon';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button';

class List extends Component {
  todoListItem = (key, item) => {
    return (
      <li key={key}>
        <Checkbox />
        <label>{item}</label>
        <Button />
      </li>
    );
  };

  render() {
    const { todoList } = this.props;
    console.log('todoList :', todoList);
    return (
      <ul>
        {todoList && todoList.map((item, key) => this.todoListItem(key, item))}
      </ul>
    );
  }
}

List.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

List.defaultProps = {
  onClick: () => ({})
};

export default List;
