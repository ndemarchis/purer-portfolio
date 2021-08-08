import React from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Article = (props) => {

    const {img, publication, title, url} = props.fields
    const caption = documentToHtmlString(props.fields?.caption)
    
    return (
        <div className="article">
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
                    {publication}
                </h4>
                {caption && (
                    <p dangerouslySetInnerHTML={{__html: caption}}></p>
                )}
            </div>
        </div>   
    )
}

export default Article