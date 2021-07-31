import React, {useState} from 'react';
import Expand from 'react-expand-animated';

const ContentType = (title: string, data: Object, componentTemplate: JSX.Element) => {

    const [isOpen, setIsOpen] = useState(false);

    const components = () => {
        return Object.values(data).map(item => componentTemplate(item));
    }

    return (
        <div>
            <h2 
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => {
                }}
                onMouseLeave={() => {
                }}
            >{title}</h2>
            <Expand open={isOpen}>
                {components()}
            </Expand>
        </div>
    );
};

export default ContentType