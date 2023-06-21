import Form from "../sub-components/Form";
import Image from "../sub-components/Image";
import Menu from "../sub-components/Menu";
import "./UserInput.css";

export default function UserInput() {
    return (
        <div className="container">
            <Menu title="Food Menu" />
            <Image />
            <Form />
        </div>
    );
}
