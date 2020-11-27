import React from "react";
import { SocialIcon } from 'react-social-icons';
import socialData from "../data/socialData";

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            socials: socialData,
        }
    }
    
    socials = [{url: "https://instagram.com/nickdemarchis"}, {url: "https://github.com/ndemarchis"}, {url: "https://linkedin.com/in/nickdemarchis"}, {url: "https://youtube.com/dadmarchis"},];
    
    socialItems = this.socials.map((item) => ( <SocialIcon key={item.key} url={item.url} bgColor="#000000" fgColor="#ffffff" style={{ height: 30 }} /> ))
    
    // socialItems = this.state.socials.map(item => <SocialIcon key={item.id} item={item}/>)
    
    render() {
        return(
            <div><table width="100%"><tbody><tr>
                <td><h1>
                    nick deMarchis
                </h1></td>
                <td className="socials" align="right">
                    {this.socialItems}
                </td>
            </tr></tbody></table></div>
        )
    }
}

export default Header