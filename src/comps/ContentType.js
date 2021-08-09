import React, {useState, useEffect} from 'react';
import Expand from 'react-expand-animated';
import useInterval from '../utils/useInterval';

const ContentType = (title = '', data = {}, componentTemplate = <div />) => {

    const [isOpen, setIsOpen] = useState(false);
    const [mouseInHeading, setMouseInHeading] = useState(false);
    const [font, setFont] = useState(['', '']);

    const fontList = [
        ['new-spirit', 700],
        ['serif', ''], 
        ['sans-serif', ''], 
        ['monospace', ''], 
        ['paralucent', 300],
        ['interstate-mono', 700],
        ['cortado', 400],
        ['masqualero', 300],
    ]

    useInterval(() => {
        setFont(fontList[Math.random() * fontList.length | 0]);
    }, mouseInHeading ? 150 : null);

    const components = () => {
        return Object.values(data).map(item => componentTemplate(item));
    }

    return (
        <div>
            <div className="headingWrapper" 
                onClick={ () => setIsOpen(!isOpen) }
                onMouseOver={ () => { setMouseInHeading(true); } }
                onMouseLeave={() => { setMouseInHeading(false); setFont(['', '']); }}
            >
                <h2 
                    className="fancyHeading"
                    style={{ 
                        fontFamily: font[0], 
                        fontWeight: font[1], 
                        opacity: mouseInHeading ? 0.1 : 0.0, 
                    }}
                >
                    {title}
                </h2>
                <h2 className="notFancyHeading">{title}</h2>
            </div>
            <div style={{ padding: '10px', }}>
                <Expand open={isOpen}>
                    { components () }
                </Expand>
            </div>
        </div>
    );
};

export default ContentType