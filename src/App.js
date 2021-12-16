import React, { useCallback, useState, useEffect } from "react";

import ContentType from "./comps/ContentType";
import Header from "./comps/Header"
import Video from "./comps/Video"
import Article from "./comps/Article"
import Experience from "./comps/Experience"

import './App.css'

import * as contentful from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import DOMPurify from 'dompurify';

const DATA_TYPES = ['video', 'articles', 'experience', 'socials', 'manifesto']

const App = () => {

    const [CMSData, setCMSData] = useState(DATA_TYPES.reduce((key, val) => (key[val]={}, key),{}));

    const createClient = () => {
        return contentful.createClient({
            space: process.env.REACT_APP_CONTENTFUL_ID,
            accessToken: process.env.REACT_APP_CONTENTFUL_KEY,
        });
    }

    const getDataForItem = (id = '', client) => {
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

    useEffect(() => {
        const client = createClient()
        DATA_TYPES.forEach( type => {
            getDataForItem(type, client)
        }); 
    }, [])

    return (
        <div className="app-wrapper">

            <Header socials={CMSData['socials']}/>
            {console.log(CMSData)}

            {<div>

                <div className="about">
                    <div dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                            documentToHtmlString(
                                Object.values(CMSData?.manifesto)[0]?.fields.manifesto
                            )
                        )
                    }} />
                    <br />
                </div>

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
            </div>
            }

            <br /><br />
        </div>
    )  
}

export default App