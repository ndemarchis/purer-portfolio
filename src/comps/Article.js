import React from "react";

const Article = (props) => {
    
    return (
        <tr>
            <td className="artThumb">
                <a href={props.item.url}>
                <img className="artImg" src={props.item.img} alt=""/></a>
            </td>
            <td className="artData">
                <a href={props.item.url}>
                <h3>{props.item.title}</h3></a>
                <p>{props.item.caption}</p> 
            </td>
        </tr>
    )
}

export default Article