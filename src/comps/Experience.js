import React from "react"

function Experience(props) {
    
    return (
        // <div className="video">
        <tr>
            <td className="expThumb">
                <img className="expImg" src={props.item.img} />
            </td>
            <td className="expData">
                <h3>{props.item.title}</h3>
                <p>{props.item.caption}</p>
            </td>
        </tr>
        // </div>
    )
}

export default Experience