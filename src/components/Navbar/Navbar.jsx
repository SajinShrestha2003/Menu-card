import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="listItems">
                <li>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" name="plus"></box-icon>
                    <a href="/">Add food</a>
                </li>
                <li>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" type="solid" name="cart-alt"></box-icon>
                    <a href="/order">Order</a>
                </li>
                <li>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" name="cog" type="solid"></box-icon>
                    <a href="/setup">Setup</a>
                </li>
                <li>
                    <box-icon color="rgb(112, 15, 15)" size="2rem" name="info-square"></box-icon>
                    <a href="/services">Services</a>
                </li>
            </ul>
        </nav>
    );
}
