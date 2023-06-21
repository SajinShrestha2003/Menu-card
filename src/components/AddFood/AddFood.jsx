import Form from "../sub-components/Form";
import Image from "../sub-components/Image";
import Menu from "../sub-components/Menu";
import "./AddFood.css";

export default function AddFood() {
    return (
        <div className="container">
            <Menu title="Food Menu" />
            <Image />
            <Form />
        </div>
    );
}
