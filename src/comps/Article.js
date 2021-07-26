import React from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Article = (props) => {

    const {publication, title, url} = props.fields
    const caption = documentToHtmlString(props.fields?.caption)
    
    return (
        <div className="article">
            <h3 className="title"><a href={url}>{title}</a></h3>
            <h4>{publication}</h4>
            <p dangerouslySetInnerHTML={{__html: caption}}></p>
        </div>    )
}

export default Article