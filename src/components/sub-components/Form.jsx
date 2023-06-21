import Button from "./Button";

import { useEffect } from "react";

export default function Form() {
    const onClick = () => {
        console.log('button clicked')
    }

    useEffect(() => {
        const selectElement = document.getElementById("food-provider");

        const handleChange = () => {
            const placeholderOption = selectElement.querySelector("[disabled][hidden]");
            if (placeholderOption) {
                placeholderOption.remove();
            }
        };

        selectElement.addEventListener("change", handleChange);

        return () => {
            selectElement.removeEventListener("change", handleChange);
        };
    }, []);
    return (
        <>
            <div className="custom2 forms">
                <form>
                    <label>
                        Menu Name:
                        <input type="text" placeholder="Type here..." />
                    </label>
                    <label>
                        Priority:
                        <input type="text" placeholder="Type here..." />
                    </label>
                    <label>
                        Food Provider:
                        <select id="food-provider">
                            <option value="" disabled hidden>
                                Choose an option
                            </option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </label>
                    <label>
                        Description:
                        <input type="text" placeholder="Less than 36 characters" />
                    </label>
                </form>
                <div className="btnHolder">
                    <Button className="customButton" onClick={onClick}>
                        Click me
                        <span className="btnIcon">
                            <box-icon color="white" size="2rem" name="plus"></box-icon>
                        </span>
                    </Button>
                </div>
            </div>
        </>
    );
}
