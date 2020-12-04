import React from "react"

function Video(props) {
    
    const srcUrl = "https://www.youtube.com/embed/" + props.item.vidid + "?start=" + props.item.start
    const hypUrl = `https://youtu.be/${props.item.vidid}?start=${props.item.start}`
    
    return (
        <tr>
            <td className="vidThumb"><iframe 
                title={props.item.title}
                src={srcUrl}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen="1">
            </iframe></td>
            <td className="vidData">
            <a href={hypUrl}><h3>{props.item.title}</h3></a>
                <p>{props.item.caption}</p>
            </td>
        </tr>
        // </div>
    )
}

export default Video