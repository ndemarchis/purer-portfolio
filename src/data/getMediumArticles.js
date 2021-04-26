// import { useEffect } from 'react-dom'

// import medium from 'medium-sdk'
const getMediumArticles = () => {

    let data = [];

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nickdemarchis')
        .then((res) => res.json())
        .then((data) => {
            const res = data.items;
            console.log(res);
            const formattedData = res.map(item => {
                let temp = {
                    key: item.pubDate,
                    title: item.title,
                    caption: '',
                    img: item.thumbnail,
                    url: item.link,
                };
                return temp
            })
            data = formattedData;
        })
    
    return data;
}

export default getMediumArticles