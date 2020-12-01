import React from "react";
// import got from "got";
// import metascraper from "metascraper";

function Article(props) {

    // const url = require(process.env.PUBLIC_URL + props.item.img)
    // const url = props.item.img

    // const metascraper = require('metascraper')([
    //     require('metascraper-date')(),
    //     require('metascraper-image')(),
    // ])
    // const got = require('got')
    // const targetUrl = props.item.url

    // ;(async () => {
    //     const { body: html, url } = await got(targetUrl)
    //     const metadata = await metascraper({ html, url })
    //     console.log(metadata)
    // })()
    
    return (
        <tr>
            <td className="artThumb">
                <a href={props.item.url}>
                <img className="artImg" src={props.item.img} alt=""/></a>
            </td>
            <td className="artData">
                <a href={props.item.url}>
                <h3>{props.item.title}</h3></a>
                <p>{props.item.caption}</p> 
            </td>
        </tr>
    )
}

export default Article