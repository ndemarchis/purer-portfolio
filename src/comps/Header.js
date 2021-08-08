import React, {useState} from "react";
import { SocialIcon } from 'react-social-icons';
import ReactPlayer from 'react-player'


const Header = (props) => {

    const { socials } = props;
    
    const socialItems = Object.values(socials).map(
        (item) => ( 
            <SocialIcon 
                key={item.sys.id} 
                url={item.fields.url} 
                bgColor="#00000000" 
                fgColor="#ffffff" 
                style={{ height: 45 }} 
            /> 
        )
    )

    return (
        <div className="header">
            <div className="header-inner">
                <h1 className="site-title">
                    nick&nbsp;deMarchis
                </h1>
            </div>
            <div className="header-social">
                {socialItems}
            </div>
        </div>
    )
}

export default Header