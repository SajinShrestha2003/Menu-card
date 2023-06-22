import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isActive, setIsActive] = useState(1);

    const handleActive = (btn) => setIsActive(btn);

    return (
        <>
            <nav className="navbar">
                <ul className="listItems">
                    <li className={`${isActive === 1 ? "activeTab" : ""}`}>
                        <Link to="/" onClick={() => handleActive(1)}>
                            <box-icon color="rgb(112, 15, 15)" size="2rem" name="plus"></box-icon>
                            <span>Add Food</span>
                        </Link>
                    </li>
                    <li className={`${isActive === 2 ? "activeTab" : ""}`}>
                        <Link to="/Order" onClick={() => handleActive(2)}>
                            <box-icon color="rgb(112, 15, 15)" size="2rem" type="solid" name="cart-alt"></box-icon>
                            <span>Order</span>
                        </Link>
                    </li>
                    <li className={`${isActive === 3 ? "activeTab" : ""}`}>
                        <Link to="/Setup" onClick={() => handleActive(3)}>
                            <box-icon color="rgb(112, 15, 15)" size="2rem" name="cog" type="solid"></box-icon>
                            <span>Setup</span>
                        </Link>
                    </li>
                    <li className={`${isActive === 4 ? "activeTab" : ""}`}>
                        <Link to="/Services" onClick={() => handleActive(4)}>
                            <box-icon color="rgb(112, 15, 15)" size="2rem" name="info-square"></box-icon>
                            <span>Services</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}
