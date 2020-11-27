/**
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function Article(props) {
    
    return (
        // <div className="video">
        <tr>
            <td className="artThumb">
                <img className="artImg" src={props.item.img} />
            </td>
            <td className="artData">
                <h3>{props.item.title}</h3>
                <p>{props.item.caption}</p>
            </td>
        </tr>
        // </div>
    )
}

export default Article