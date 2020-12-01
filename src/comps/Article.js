/**
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function Article(props) {
    
    return (
        // <div className="video">
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
        // </div>
    )
}

export default Article