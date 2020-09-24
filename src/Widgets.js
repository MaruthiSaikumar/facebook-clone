import React from 'react'
import "./Widgets.css"
import Iframe from 'react-iframe'

function Widgets() {
    return (
        <div className="widgets">
         {/*   <iframe
            src="https://github.com/MaruthiSaikumar"
            width="340"
            height="100%"
            style={{ border: "none", overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >

            </iframe>*/}
            <Iframe url="https://github.com/MaruthiSaikumar"
        width="340px"
        height="1000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
    )
}

export default Widgets
