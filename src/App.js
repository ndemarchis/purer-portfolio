import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import ReactPlayer from 'react-player'
import Expand from 'react-expand-animated';

import './style.css';
import twenty from "./comps/img/twenty.png"
import Header from "./comps/Header"
import Video from "./comps/Video"
import videoData from "./data/videoData"
import Article from "./comps/Article"
import articleData from "./data/articleData"
import Experience from "./comps/Experience"
import expData from "./data/expData"

import * as contentful from "contentful";
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const App = () => {

    const colors = [
        ["rgba(0,0,0,1)", "rgb(9, 0, 51)", "rgb(0, 30, 43)"],
        ["#e81cff","#40c9ff"],
        ["#ff0f7b","#f89b29"],
        ["#432371","#faae7b"],
        ["#4b2840","#861388","#e15a97"], // purple
        ["#aa4465","#861657","#011638"], // bright pink basically inverse
    ]

    const [videos, setVideos] = useState(videoData);
    const [articles, setArticles] = useState(articleData);
    const [exps, setExps] = useState(expData);
    const [curColorIndex, setCurColorIndex] = useState(0);
    const [vidOpen, setVidOpen] = useState(false);
    const [artOpen, setArtOpen] = useState(false);
    const [expOpen, setExpOpen] = useState(false);

    const [CMSData, setCMSData] = useState(null);

    const getCMSData = () => {
        const client = contentful.createClient({
            space: process.env.REACT_APP_CONTENTFUL_ID,
            // environment: '<environment_id>', // defaults to 'master' if not set
            accessToken: process.env.REACT_APP_CONTENTFUL_KEY,
        });
    
        client.getContentTypes()
            .then((response) => {
                let out = response.items.map(entry => entry.sys.id);
    
                let final = {};
    
                for (const id of out) {
                    client.getEntries({
                        content_type: id
                    })
                        .then((response) => {
                            final[id] = response.items;
                        })
                        .catch(console.error);
                }
    
                setCMSData(final);
    
            })
            .catch(console.error);
    }

    const handler = () => {
        let i = curColorIndex
        if (i + 1 < colors.length) { i++ } else { i = 0 }
        setCurColorIndex(i);
        let v = genBackgroundString(colors[i]);
        gsap.to(document.body, {duration: 0.5, background: v});
    }

    const changeColor = (cArr: string[][]) => {
        let v = genBackgroundString(cArr);
        document.body.style.background = v;
    }

    const genBackgroundString = (cArr) => {
        let v;
        if (cArr.length === 2) {
            v = `linear-gradient(204deg, ${cArr[0]} 0%, ${cArr[1]} 100%)`;
        } else if (cArr.length === 3) {
            v = `linear-gradient(204deg, ${cArr[0]} 0%, ${cArr[1]} 62%, ${cArr[2]} 100%)`;
        }
        return v;
    }

    const toggleVid = () => { setVidOpen(!vidOpen); }
    const toggleArt = () => { setArtOpen(!artOpen); }
    const toggleExp = () => { setExpOpen(!expOpen); }

    useEffect(() => {
        changeColor(colors[0])
        gsap.registerPlugin(CSSRulePlugin);
        getCMSData()
        console.log(CMSData)
    }, [])

    useEffect(() => {
        console.log(CMSData)
    }, [CMSData])

    const videoItems = videos.slice(1).map(item => <Video key={item.id} item={item}/>)
    const articleItems = articles.map(item => <Article key={item.id} item={item}/>)
    const expItems = exps.map(item => <Experience key={item.id} item={item}/>)

    return (
        <div className="app-wrapper">

            <Header handler = {handler} />
            
            <div className="video-wrapper">
                <br />
                <ReactPlayer 
                    className="featured-video"
                    url={`https://youtube.com/watch?v=${videos[0].vidid}`} 
                    width="100%"
                    light={"/img/twenty.png"}
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
                /><br />
                <div className="experience-wrapper">
                    <h2 onClick={toggleExp}><a href="javascript:;">projects / experiences</a></h2>
                    <Expand open={expOpen}>
                        <br />
                        <table><tbody>
                        {expItems}
                        </tbody></table>
                        <br />
                    </Expand>
                </div>
                <h2 onClick={toggleVid}><a href="javascript:;">videos</a></h2>
                <Expand open={vidOpen}>
                    <br />
                    <table><tbody>
                    {videoItems}
                    </tbody></table>
                    <br />
                </Expand>
            </div>
            
            <div className="article-wrapper">
                <h2 onClick={toggleArt}><a href="javascript:;">articles</a></h2>
                <Expand open={artOpen}>
                    <br />
                    <table><tbody>
                    {articleItems}
                    </tbody></table>
                    <br />
                </Expand>
            </div>
            
            <div className="about">
                <h2>about</h2>
                <br />
                <p>
                    i'm a junior in the class of 2022 at Bucknell University, pursuing
                    a B.S. in computer engineering with a minor in film and media studies.
                </p>
                <p>
                    the meaning of the phrase "making things beautiful" is the pursuit of beauty through
                    visual simplicity and practical efficiency. everything that i do — video production,
                    engineering, all my hobbies and interests — are to make the most beautiful thing
                    possible. whether it's reducing the runtime on a problematic Python system, trimming
                    down the time on a long video, or putting the finishing touches on an opinions piece,
                    i'm of the firm belief that everything can accomplish its purpose in a beautiful way.
                </p><br /><br />
            </div>
        </div>
    )    
}

export default App