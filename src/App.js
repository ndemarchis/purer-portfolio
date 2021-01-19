import React from "react";
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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

class App extends React.Component {

    colors = [
        ["rgba(0,0,0,1)", "rgb(9, 0, 51)", "rgb(0, 30, 43)"],
        ["#320e3b","#e56399","#7f96ff"], // bright pink
        ["#022b3b","#234157","#3e5a20"],
        // ["#09090b","#e84855","#3185fc"],
        ["#4b2840","#861388","#e15a97"], // purple
        ["#aa4465","#861657","#011638"], // bright pink basically inverse
        // ["#dbb1bc","#d3c4e3","#8f95d3","black"]
        // ["#8f95d3","#5850fa","#da5552"], // blue, gray, red
        // ["#297045","#2e933c","#74b63e"], // light to dark green
        // ["#594157","#726da8","#7d8cc4"], // dark blue gray, etc.
    ]

    constructor(props) {
        super(props)
        this.state = {
            videos: videoData,
            articles: articleData,
            exps: expData,
            curColorIndex: 0,

            vidOpen: false,
            artOpen: false,
            expOpen: false,
        }

        this.handler = this.handler.bind(this)
    }

    componentDidMount() {
        this.changeColor(this.colors[0])
        gsap.registerPlugin(CSSRulePlugin);
    }

    handler() {
        let i = this.state.curColorIndex
        if (i + 1 < this.colors.length) { i++ } else { i = 0 }
        this.setState({curColorIndex: i})
        let arr = this.colors[i]
        let v = `linear-gradient(204deg, ${arr[0]} 0%, ${arr[1]} 62%, ${arr[2]} 100%)`;
        gsap.to(document.body, {duration: 0.5, background: v});
    }

    changeColor(cArr) {
        let v = `linear-gradient(204deg, ${cArr[0]} 0%, ${cArr[1]} 62%, ${cArr[2]} 100%)`;
        document.body.style.background = v;
    }

    toggleVid = () => {
        this.setState(prevState => ({ vidOpen: !prevState.vidOpen }))
    }

    toggleArt = () => {
        this.setState(prevState => ({ artOpen: !prevState.artOpen }))
    }

    toggleExp = () => {
        this.setState(prevState => ({ expOpen: !prevState.expOpen }))
    }

    render() {

        const videoItems = this.state.videos.slice(1).map(item => <Video key={item.id} item={item}/>)
        const articleItems = this.state.articles.map(item => <Article key={item.id} item={item}/>)
        const expItems = this.state.exps.map(item => <Experience key={item.id} item={item}/>)
 
        return (
            <div className="app-wrapper">

                <Header handler = {this.handler} />
                
                <div className="video-wrapper">
                    <br />
                    {/* <Video item={this.state.videos[0]} width="80%"/> */}
                    <ReactPlayer 
                        className="featured-video"
                        url={`https://youtube.com/watch?v=${this.state.videos[0].vidid}`} 
                        width="100%"
                        // height="235px"
                        light={twenty}
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
                    <h2 onClick={this.toggleVid}><a href="javascript:;">videos</a></h2>
                    <Expand open={this.state.vidOpen}>
                        <br />
                        <table><tbody>
                        {videoItems}
                        </tbody></table>
                        <br />
                    </Expand>
                </div>
                
                <div className="article-wrapper">
                    <h2 onClick={this.toggleArt}><a href="javascript:;">articles</a></h2>
                    <Expand open={this.state.artOpen}>
                        <br />
                        <table><tbody>
                        {articleItems}
                        </tbody></table>
                        <br />
                    </Expand>
                </div>
                
                <div className="experience-wrapper">
                    {/* <h2 onClick={this.toggleExp}>experiences</h2>
                    <Expand open={this.state.expOpen}>
                        <br />
                        <table><tbody>
                        {expItems}
                        </tbody></table>
                        <br />
                    </Expand> */}
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
}

export default App