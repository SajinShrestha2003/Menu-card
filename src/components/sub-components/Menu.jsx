import PropTypes from "prop-types";


const Menu = ({title}) => {
  return (
    <div className="custom menu">
      <h2 className="menuTitle">{title}</h2>
    </div>
  )
}

Menu.propTypes = {
    title: PropTypes.string.isRequired
 };

export default Menu
