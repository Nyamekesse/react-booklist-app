import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, btnClick }) => {
  return (
    <div>
      <button
        onClick={() => btnClick()}
        type="submit"
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "Remove",
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
