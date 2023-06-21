import PropTypes from "prop-types";

const Button = ({ children, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            <span className="btnContent">{children}</span>
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
