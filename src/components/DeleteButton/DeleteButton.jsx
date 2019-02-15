import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <button className="App-delete-btn" onClick={onClick}></button>
        )
    }
}

DeleteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
};
DeleteButton.defaultProps = {
    onClick: () =>({})
};

export default DeleteButton;