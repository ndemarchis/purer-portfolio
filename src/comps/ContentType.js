import React, {useState} from 'react';
import Expand from 'react-expand-animated';

const ContentType = (open: boolean, onClick, title: string, data, componentTemplate) => {

    // have each content type control whether it's open! they don't gotta know about each other!
    // local state for the win!

    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {setIsOpen(!isOpen);}; 

    // make the components with items as props
    // these copilot suggestions are getting scary, will test this later
    const components = data.map((item, index) => {
        return (
            <div key={index}>
                {componentTemplate(item)}
            </div>
        );
    });

    console.log(data)
    console.log(componentTemplate)

    return ('bobby')
}

export default ContentType