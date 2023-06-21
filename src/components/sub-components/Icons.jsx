import PropTypes from "prop-types";

export default function Icons({name, size, color}) {
  return (
    <div className="icons">
      <box-icon color={color} size={size} type='solid' name={name}></box-icon>
    </div>
  )
}
Icons.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};