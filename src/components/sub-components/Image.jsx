import Icons from "./Icons";
import PropTypes from "prop-types";

export default function Image({ title, url, alt }) {
    return (
        <div className="custom imageSection">
            <h2 className="menuTitle">{title}</h2>
            <img src={url} alt={alt} />
            <div className="icon">
                <Icons name="camera" size="2rem" color="red" />
                <Icons name="photo-album" size="2rem" color="red" />
            </div>
        </div>
    );
}
Image.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
