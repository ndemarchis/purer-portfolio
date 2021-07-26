import React from "react"

const Experience = (props) => {

    const {dates, img, link, role, title} = props.fields
    
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

export default Experience