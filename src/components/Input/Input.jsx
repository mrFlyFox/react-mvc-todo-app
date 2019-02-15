import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    componentDidMount() {
    }

    render() {
        const {onClick, ref} = this.props;
        return (
            <input ref={ref} placeholder="write your todo" onClick={onClick}  type="text" />
        );
    }
}
Input.propTypes = {
    onClick: PropTypes.func.isRequired,
};
Input.defaultProps = {
    onClick: () => ({})
};

export default Input;