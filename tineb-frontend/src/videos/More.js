import React from "react";
import "./Videos.css";
import Logo from "./arrow.png";
import PropTypes from "prop-types";
// more = watch more videos title and link.
const More = ({title,href}) => (
        <>
            <div className="text">
                <img src={Logo} alt="Visit link"/><a style={{ color: '#234a8d' }} href={href}>{title}</a>
            </div>
        </>
);

More.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};
export default More;