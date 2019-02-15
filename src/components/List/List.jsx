import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import DeleteButton from '../DeleteButton';

class List extends Component {
  todoListItem = (key, item) => {
    return (
      <li className="App-todo-element" key={key}>
        <div
          className="App-checkbox-wrapper"
        >
          <label className="App-todo-label">
            <Checkbox onCompleted={this.props.onCompleted.bind(this, item)} />
            <span className={`App-todo-box ${item.completed ? 'box-completed' : ''}`} />
          </label>
        </div>
        <p 
            className={`App-todo-text ${
            item.completed ? 'completed' : ''
          }`}>{item.value}
        </p>
        <button
          type="button"
          className="App-delete-btn"
          onClick={this.props.onDelete.bind(this, key, item)}
        />
      </li>
    );
  };
  render() {
    const { todoList } = this.props;

    return (
      <ul className="App-todo-list">
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
