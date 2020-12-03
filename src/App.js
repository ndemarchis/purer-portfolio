import React from "react"
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './style.css';
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
        ["#022b3b","#234157","#3e5a20"],
        ["#09090b","#e84855","#3185fc"],
        ["#320e3b","#e56399","#7f96ff"]
    ]

    constructor(props) {
        super(props)
        this.state = {
            videos: videoData,
            articles: articleData,
            exps: expData,
            colArr: ["rgba(0,0,0,1)", "rgb(9, 0, 51)", "rgb(0, 30, 43)"],
            // background: "rgba(0,0,0,1)",
        }
        this.handler = this.handler.bind(this)
        this.changeColor(this.state.colArr)
    }

    handler() {
        this.setState({
          colArr: Math.random()
        })
        var arr = this.colors[Math.floor(Math.random() * this.colors.length)]
        // console.log(`state.colArr changed to ${this.state.colArr}`)
        console.log(`state.colArr changed to ${arr}`)
        this.changeColor(arr)
    }

    changeColor(cArr) {
        let v = `linear-gradient(204deg, ${cArr[0]} 0%, ${cArr[1]} 62%, ${cArr[2]} 100%)`;
        document.body.style.background = v;
    }

    render() {
        const videoItems = this.state.videos.map(item => <Video key={item.id} item={item}/>)
        const articleItems = this.state.articles.map(item => <Article key={item.id} item={item}/>)
        const expItems = this.state.exps.map(item => <Experience key={item.id} item={item}/>)
 
        return (
            <div className="app-wrapper">
            {/* <div className="app-wrapper" style={{background: this.state.background}}> */}
                {/* <Header changeStateArr={this.changeStateArr.bind(this)} /> */}
                <Header handler = {this.handler} />
                
                <div className="video-wrapper">
                    <h2>videos</h2>
                    <table><tbody>
                    {videoItems}
                    </tbody></table>
                </div>

                {/* {window.location.href}"\n"{window.location.hostname} */}
                
                <div className="video-wrapper">
                    <h2>articles</h2>
                    <table><tbody>
                    {articleItems}
                    </tbody></table>
                </div>
                
                {/* <div className="exp-wrapper">
                    <h2>experiences</h2>
                    <table><tbody>
                    {expItems}
                    </tbody></table>
                </div> */}
                
                <div className="about">
                    <h2>about</h2>
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