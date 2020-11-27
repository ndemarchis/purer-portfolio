/**
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function Video(props) {
    
    const srcUrl = "https://www.youtube.com/embed/" + props.item.vidid + "?start=" + props.item.start
    
    return (
        // <div className="video">
        <tr>
            <td className="vidThumb"><iframe 
                // width="560" 
                // height="315" 
                src={srcUrl}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen="1">
            </iframe></td>
            <td className="vidData">
                <h3>{props.item.title}</h3>
                <p>{props.item.caption}</p>
            </td>
        </tr>
        // </div>
    )
}

export default Video