import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    state = {
        todoList: []
    };
    render() {
        const {onClick, value} = this.props;
        const {todoList} = this.state;
        return(
            <ul>{
                todoList
            }</ul>
        )
    }
}