import React from "react"
import ReactPlayer from 'react-player'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const Video = (props) => {

    const {featured, link, start, title, vidid} = props.fields
    console.log(props.fields?.caption)
    const caption = (str) => documentToHtmlString(str)
    console.log(caption(props.fields.caption))
    
    
    const hypUrl = `https://youtube.com/watch?v=${vidid}?start=${start}`

    return (
        <div>
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
            <a href={hypUrl}><h3>{title}</h3></a>
            <p>{props.fields?.caption}</p>
        </div>
    )
}

export default Video