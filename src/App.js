import React from "react"

import './style.css';
import Header from "./comps/Header"
import Video from "./comps/Video"
import videoData from "./data/videoData"
import Article from "./comps/Article"
import articleData from "./data/articleData"
import Experience from "./comps/Experience"
import expData from "./data/expData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            videos: videoData,
            articles: articleData,
            exps: expData
        }
    }
    
    render() {
        const videoItems = this.state.videos.map(item => <Video key={item.id} item={item}/>)
        const articleItems = this.state.articles.map(item => <Article key={item.id} item={item}/>)
        const expItems = this.state.exps.map(item => <Experience key={item.id} item={item}/>)
 
        return (
            <div className="app-wrapper">
                <Header />
                
                <div className="video-wrapper">
                    <h2>videos</h2>
                    <table><tbody>
                    {videoItems}
                    </tbody></table>
                </div>
                
                <div className="video-wrapper">
                    <h2>articles</h2>
                    <table><tbody>
                    {articleItems}
                    </tbody></table>
                </div>
                
                <div className="exp-wrapper">
                    <h2>experiences</h2>
                    <table><tbody>
                    {expItems}
                    </tbody></table>
                </div>
                
                <div className="about">
                    <h2>about</h2>
                    <p>
                        nick demarchis is a junior in the class of 2022 at Bucknell University. 
                        he is studying computer engineering with a minor in film and media studies.
                        send an email to <a href="mailto:ned004@bucknell.edu">ned004@bucknell.edu</a>.</p>
                    <p></p>
                </div>
            </div>
        )    
    }
}

export default App