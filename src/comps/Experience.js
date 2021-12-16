import React from "react"
import DOMPurify from "dompurify"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Experience = (props) => {

    const {dates, img, link, role, title, caption} = props.fields
    
    return (
        <div className = "individual-experience-wrapper individual-thing" >
            <div className = "experience-content-wrapper">
            <h3><a href={link} className="individual-experience-title">{title}</a></h3>
                <p>{role}, {dates}</p> 
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        documentToHtmlString(caption)
                    )
                }} />
            </div>
            <div className = "experience-image-wrapper" >
                <a href= {link}>
                    <img 
                        className = "experience-image"
                        src = {img.fields.file.url} 
                        alt = {title} 
                    />
                </a>
            </div>
        </div>
    )
}

export default Experience