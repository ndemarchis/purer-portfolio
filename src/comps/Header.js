import React, {useState} from "react";
import { SocialIcon } from 'react-social-icons';
import ReactPlayer from 'react-player'


const Header = () => {

    const [socials, setSocials] = useState();
    

    // TODO import from CMS as socials
    
    
    // const socialItems = this.socials.map((item) => ( <SocialIcon key={item.key} url={item.url} bgColor="#00000000" fgColor="#ffffff" style={{ height: 30 }} /> ))
    
    const handleClick = (e) => {
        e.preventDefault();
        // this.props.changeStateArr(["#000000","#000000","#000000"]);
        // console.log('The link was clicked.');
    };
    return (
        <div className="headerWrapper"><table width="100%"><tbody><tr>
            <td>
                <h1 
                    style={{
                        // fontWeight: 100
                    }}
                >
                    nick deMarchis
                </h1>
            </td>
            <td className="socials" align="right">
                    {/* <a onClick={this.props.handler} href="javascript:;">😎</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {this.socialItems} */}
            </td>
        </tr></tbody></table>
        <ReactPlayer 
                className="featured-video"
                // url={`https://youtube.com/watch?v=${videos[0].vidid}`} 
                width="100%"
                light={""}
                playing={true} 
                style={{
                    border: "1px solid #fff"
                }}
                config={{youtube: {
                    playerVars: { 
                        controls: 1,
                        modestbranding: 1,
                        fs: 1,
                    }
                },}}
            />
        </div>
    )
}

export default Header