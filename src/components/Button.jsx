import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button({ children, type = 'solid', onClick }) {
    const buttonStyles = clsx(
        'flex text-sm px-3 py-1 rounded-lg transition-all duration-200 self-start item-center justify-center',
        {
            'text-white bg-black hover:bg-[#282828]': type === 'solid',
            'text-white hover:bg-[#282828] hover:rounded-2xl': type === 'transparent',
            'text-black bg-white rounded-2xl': type === 'solid-invert',
        }
    );
    

    return (
        <button className={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['solid', 'transparent']), // Restricts to these types
    onClick: PropTypes.func, // Optional onClick handler
};

Button.defaultProps = {
    type: 'solid', // Default type is 'solid'
    onClick: undefined,
};

export default Button;
