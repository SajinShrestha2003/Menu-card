import Icons from "./Icons";

export default function Image() {
    return (
        <div className="custom imageSection">
            <h2 className="menuTitle">Create food menu</h2>
            <img
                src="http://pluspng.com/img-png/png-menu-restaurant-formatted-menus-for-restaurants-1386.png"
                alt="no image found"
            />
            <div className="icon">
                <Icons name="camera" size="2rem" color="red"/>
                <Icons name="photo-album"  size="2rem" color="red" />
            </div>
        </div>
    );
}
