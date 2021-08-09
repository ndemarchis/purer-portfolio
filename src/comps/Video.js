import React from "react"
import ReactPlayer from 'react-player'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import DOMPurify from "dompurify"


const Video = (props) => {

    const {featured, link, start, title, vidid, caption} = props.fields
    const img = props.fields?.img?.fields?.file?.url
    
    const hypUrl = `https://youtube.com/watch?v=${vidid}${start !== 0 ? "&start=" + start : ""}`

    return (
        <div style = {{
            // display: 'flex',
        }}>
            {vidid && <div className = "individual-video-wrapper">
                <ReactPlayer 
                    className= "video-player"
                    url={hypUrl} 
                    light={img ? img : `https://img.youtube.com/vi/${vidid}/0.jpg`} 
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
            </div> }
            <div>
                <h3><a href={hypUrl}>{title}</a></h3>
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        documentToHtmlString(caption)
                    )
                }} />
            </div>
        </div>
    )
}

export default Video