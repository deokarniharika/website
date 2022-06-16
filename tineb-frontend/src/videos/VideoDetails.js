import React from "react";
import "./Videos.css";
// vtitle = title of video
// VideoDescription= = video description
import PropTypes from "prop-types";

const VideoDetails = ({ VideoTitle, VideoDescription }) => (
  <>
    <div className="Videos">
      <div className="vtitle">
        <h2>{VideoTitle}</h2>
      </div>
      <div className="vtext">
        <h5>{VideoDescription}</h5>
      </div>
    </div>
  </>
);

VideoDetails.propTypes = {
  VideoTitle: PropTypes.string.isRequired,
  VideoDescription: PropTypes.string.isRequired,
};

export default VideoDetails;
