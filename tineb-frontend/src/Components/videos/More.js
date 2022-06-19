import React from "react";
import "./Videos.css";
import PropTypes from "prop-types";
// more = watch more videos title and link.
const More = ({title,href}) => (
        <>
            <div className="text">
            <i className="bi bi-arrow-up-right"/><a style={{ color: '#234a8d' ,  paddingLeft: '10px'}} href={href}>{title}</a>
            </div>
        </>
);

More.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};
export default More;