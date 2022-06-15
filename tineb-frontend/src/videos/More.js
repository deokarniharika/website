import React from "react";
import "./Videos.css";
import Logo from "./arrow.png";
// vtitle = title of video
// vdesc = video description
export function Vtitle({ vtitle, vdesc }) {
    return (
        <>
            <div className="Videos">
                <div className="vtitle">
                    <h2>{vtitle}</h2>
                </div>
                <div className="vtext">
                    <h5>{vdesc}</h5>
                </div>
            </div>
        </>
    )
};
// more = watch more videos title and link
// more.js file different from more function.
export function More({title,href}) {
    return (
        <>
            <div className="text">
                <img src={Logo} alt="Visit link"/><a style={{ color: '#234a8d' }} href={href}>{title}</a>
            </div>
           </>
    )
};
// embedid = youtube embed part can be modified to insert link
export function YoutubeEmbed({ embedId }) {
    return(
    <div className="video-responsive">
        <centre>

            <iframe
                width="200"
                height="280"
                //src={`{embedId}`} for complete link (didnt tested)
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </centre>
        </div>
        )
};