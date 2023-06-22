import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isActive, setIsActive] = useState(1);

    const handleActive = (btn) => setIsActive(btn);

    return (
        <nav className="navbar">
            <ul className="listItems">
                <li className={`${isActive === 1 ? "activeTab" : ""}`}>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" name="plus"></box-icon>
                    <a href="/" onClick={() => handleActive(1)}>
                        Add food
                    </a>
                </li>
                <li className={`${isActive === 2 ? "activeTab" : ""}`}>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" type="solid" name="cart-alt"></box-icon>
                    <a href="/order" onClick={() => handleActive(2)}>
                        Order
                    </a>
                </li>
                <li className={`${isActive === 3 ? "activeTab" : ""}`}>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" name="cog" type="solid"></box-icon>
                    <a href="/setup" onClick={() => handleActive(3)}>
                        Setup
                    </a>
                </li>
                <li className={`${isActive === 4 ? "activeTab" : ""}`}>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" name="info-square"></box-icon>
                    <a href="/services" onClick={() => handleActive(4)}>
                        Services
                    </a>
                </li>
            </ul>
        </nav>
    );
}
