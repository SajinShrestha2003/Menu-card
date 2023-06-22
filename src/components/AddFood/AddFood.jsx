import Form from "../sub-components/Form";
import Image from "../sub-components/Image";
import Menu from "../sub-components/Menu";
import "./AddFood.css";

export default function AddFood() {
    return (
        <div className="container">
            <Menu title="Food Menu" />
            <Image
                title="Create Food Menu"
                url="http://pluspng.com/img-png/png-menu-restaurant-formatted-menus-for-restaurants-1386.png"
                alt="no image found"
            />
            <Form />
        </div>
    );
}
