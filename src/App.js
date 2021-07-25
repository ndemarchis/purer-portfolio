import React, { useState, useEffect } from "react";

import Header from "./comps/Header"
import Video from "./comps/Video"
import Article from "./comps/Article"
import Experience from "./comps/Experience"

import ContentType from "./comps/ContentType";

import * as contentful from "contentful";
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const DATA_TYPES = ['video', 'articles', 'experience', 'socials']

const App = () => {

    const [CMSData, setCMSData] = useState(DATA_TYPES.reduce((key,val) => (key[val]={}, key),{}));

    const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_KEY,
    });

    const getDataForItem = async (id: string) => {
        client.getEntries({
            content_type: id
        })
        .then((entries) => {
            const oldObj = {...CMSData}
            entries.items.forEach((entry) => {
                oldObj[id][entry.sys.id] = entry
            })
            setCMSData(oldObj)
        })
    }

    const getCMSData = () => {
        DATA_TYPES.forEach(type => {getDataForItem(type)})
    }

    useEffect(() => { getCMSData(); }, [])

    return(
        <div className="app-wrapper">

            <Header socials={CMSData['socials']}/>

            <div className="experience-wrapper">
                { ContentType (
                    'experience', 
                    CMSData['experience'], 
                    Experience
                ) }
            </div>

            <div className="video-wrapper">
                { ContentType (
                    'videos', 
                    CMSData['video'], 
                    Video
                ) }
            </div>
            
            <div className="article-wrapper">
                { ContentType (
                    'articles',
                    CMSData['articles'],
                    Article
                ) }
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