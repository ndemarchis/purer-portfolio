import React from "react"
import ReactPlayer from 'react-player'

function Video(props) {
    
    const srcUrl = `https://www.youtube.com/embed/${props.item.vidid}?start=${props.item.start}&modestbranding=1&rel=0&color=white`
    // const hypUrl = `https://youtu.be/${props.item.vidid}?start=${props.item.start}`
    const hypUrl = `https://youtube.com/watch?v=${props.item.vidid}`

    return (
        <tr>
            <td className="vidThumb">
                <ReactPlayer 
                    url={hypUrl} 
                    width="100%" 
                    height="235px" 
                    light={true} 
                    playing={true}
                    controls={true}
                    config={{
                        youtube: {
                            playerVars: { 
                                modestbranding: 1,
                                fs: 1,
                                color: "white",
                            }
                        },
                    }}
                />
            </td>
            <td className="vidData">
                <a href={hypUrl}><h3>{props.item.title}</h3></a>
                <p>{props.item.caption}</p>
            </td>
        </tr>
        // </div>
    )
}

export default Video