import React from "react"
import DOMPurify from "dompurify"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Experience = (props) => {

    const {dates, img, link, role, title, caption} = props.fields
    
    return (
        <div className = "individual-experience-wrapper" >
            <div className = "experience-content-wrapper">
                <a href={link}><h3>{title}</h3></a>
                <p>{role}</p>
                <p>{dates}</p> 
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        documentToHtmlString(caption)
                    )
                }} />
            </div>
            <div className = "experience-image-wrapper" >
                <img className = "experience-image" src={img.fields.file.url} alt={title} />
            </div>
        </div>
    )
}

export default Experience