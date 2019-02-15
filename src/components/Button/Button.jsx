import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <input type="button" onClick={onClick} value={'Click'}/>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
};
Button.defaultProps = {
    onClick: () =>({})
};

export default Button;