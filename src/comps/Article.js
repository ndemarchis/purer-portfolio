import React from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import {sanitize} from "dompurify"

const Article = (props) => {

    const {img, publication, title, url} = props.fields
    const date = new Date(props.fields?.date)
    const caption = documentToHtmlString(props.fields?.caption)
    
    return (
        <div className="article individual-thing">
            <a href={url}>
                <img 
                    src={img.fields.file.url} 
                    alt={img.fields.title} 
                    className="article-image"
                />
            </a>
            <div>
                <h3 className="article-title">
                    <a href={url}>
                        {title}
                    </a>
                </h3>
                <h4>
                    <i>{publication}</i>
                    {publication && date ? " — " : ""}
                    {date.toLocaleDateString('en-US',  { 
                        year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                </h4>
                {caption && (
                    <p dangerouslySetInnerHTML={{__html: sanitize(caption)}}></p>
                )}
            </div>
        </div>   
    )
}

export default Article