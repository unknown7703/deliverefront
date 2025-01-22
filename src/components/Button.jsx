import PropTypes from 'prop-types';

function Button({children}){
    return(<div className="text-black font-normal border text-lg border-gray-500 px-8 py-1 rounded-lg hover:text-white hover:bg-gray-800">{children}</div>)
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button