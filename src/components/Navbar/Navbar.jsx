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
                        <box-icon color="rgb(112, 15, 15)" size="2rem" name="plus"></box-icon>
                        <Link to="/" onClick={() => handleActive(1)}>
                            Add food
                        </Link>
                    </li>
                    <li className={`${isActive === 2 ? "activeTab" : ""}`}>
                        <box-icon color="rgb(112, 15, 15)" size="2rem" type="solid" name="cart-alt"></box-icon>
                        <Link to="/Order" onClick={() => handleActive(2)}>
                            Order
                        </Link>
                    </li>
                    <li className={`${isActive === 3 ? "activeTab" : ""}`}>
                        <box-icon color="rgb(112, 15, 15)" size="2rem" name="cog" type="solid"></box-icon>
                        <Link to="/Setup" onClick={() => handleActive(3)}>
                            Setup
                        </Link>
                    </li>
                    <li className={`${isActive === 4 ? "activeTab" : ""}`}>
                        <box-icon color="rgb(112, 15, 15)" size="2rem" name="info-square"></box-icon>
                        <Link to="/Services" onClick={() => handleActive(4)}>
                            Services
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}
