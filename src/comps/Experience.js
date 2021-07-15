import React from "react"

const Experience = (props) => {
    
    return (
        // <div className="video">
        <tr>
            <td className="expThumb"><a href={props.item.link} target="_blank" rel="noreferrer">
                <img className="expImg" src={props.item.img} /></a>
            </td>
            <td className="expData">
                <a href={props.item.link} target="_blank" rel="noreferrer">
                    <h3>{props.item.title}</h3>
                </a>
                <h4>{props.item.dates}</h4>
                <p>{props.item.caption}</p>
            </td>
        </tr>
        // </div>
    )
}

export default Experience