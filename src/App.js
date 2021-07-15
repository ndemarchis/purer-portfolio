import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import ReactPlayer from 'react-player'
import Expand from 'react-expand-animated';

import Header from "./comps/Header"
import Video from "./comps/Video"
import Article from "./comps/Article"
import Experience from "./comps/Experience"

import * as contentful from "contentful";
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const App = () => {
    const [vidOpen, setVidOpen] = useState(false);
    const [artOpen, setArtOpen] = useState(false);
    const [expOpen, setExpOpen] = useState(false);

    const [CMSData, setCMSData] = useState('');

    const toggleVid = () => { setVidOpen(!vidOpen); }
    const toggleArt = () => { setArtOpen(!artOpen); }
    const toggleExp = () => { setExpOpen(!expOpen); }

    const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_ID,
        // environment: '<environment_id>', // defaults to 'master' if not set
        accessToken: process.env.REACT_APP_CONTENTFUL_KEY,
    });

    const GetCMSData = () => { 
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

            setCMSData(final)

        })
        .catch(console.error);
    }

    useEffect(() => {
        setCMSData(GetCMSData())
    }, [])

    useEffect(() => {
        console.log(CMSData)

        // TODO: conditionally render Header, Video, Article and Experience components
    }, [CMSData])

    return (
        <div className="app-wrapper">
            <Header />

            <div className="experience-wrapper">
                <h2 onClick={toggleExp}><a href="javascript:;">projects / experiences</a></h2>
                <Expand open={expOpen}>
                    daddy made you your favorite, open wide
                </Expand>
            </div>

            <div className="video-wrapper">
                <h2 onClick={toggleVid}><a href="javascript:;">videos</a></h2>
                <Expand open={vidOpen}>
                </Expand>
            </div>
            
            <div className="article-wrapper">
                <h2 onClick={toggleArt}><a href="javascript:;">articles</a></h2>
                <Expand open={artOpen}>
                </Expand>
            </div>
            
            <div className="about">
                <h2>about</h2>
                <br />
                <p>
                    i'm a senior in the class of 2022 at Bucknell University, pursuing
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