import Button from "./Button";

export default function Form() {
    const onClick = () => {
        console.log("button clicked");
    };

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
                            <option value="">Choose an option...</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </label>
                    <label>
                        Description:
                        <input type="text" maxLength="36" placeholder="Less than 36 letters..." />
                    </label>
                    <div className="btnHolder">
                        <Button className="customButton" onClick={onClick}>
                            Click me
                            <span className="btnIcon">
                                <box-icon color="white" size="2rem" name="plus"></box-icon>
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
