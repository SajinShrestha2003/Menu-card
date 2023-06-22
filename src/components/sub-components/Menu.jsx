import PropTypes from "prop-types";
import Icons from "./Icons";

const Menu = ({ title }) => {
    const listItems = [
        { name: "Item 1", icon: "cookie", color: "red" },
        { name: "Item 2", icon: "cookie", color: "red" },
        { name: "Item 3", icon: "cookie", color: "red" },
        { name: "Item 4", icon: "cookie", color: "red" },
        { name: "Item 5", icon: "cookie", color: "red" },
        { name: "Item 6", icon: "cookie", color: "red" },
        { name: "Item 7", icon: "cookie", color: "red" },
    ];

    return (
        <div className={`custom menu ${listItems.length >= 7 ? "scroll" : ""}`}>
            <h2 className="menuTitle">{title}</h2>
            <ul className="menuList">
                {listItems.map((items, index) => (
                    <li key={index}>
                        <Icons name={items.icon} size="2rem" color={items.color} id="#bgColor" />
                        <span>{items.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Menu.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Menu;
