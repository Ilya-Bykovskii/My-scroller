import React, {useState, useEffect} from 'react';

// Components: 
import CardPrev from './card-preview/CardPrev';

// style:
import StyleComp from './style/card-area.module.css';

interface Post {
    id: number | string;
    title: string;
    preview?: string;
    body: string;
    type: 'animal' | 'video' | 'music' | 'books';
}

export default function CardArea() {
    const [items, setItems] = useState<Array<Post>>([]);

    const genPreview = function(body: string): string {
        if (body.length <= 50) return body;
        return body.slice(0, 50) + '...';
    }

    async function getNewPosts() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            if (data.ok) return data;
            throw new Error('filed connection with server');
        })
        .then(data => data.json())
        .then(json => {
            json.length = 20;
            setItems(prev => [...prev, ...json])
        })
        .catch(err => console.log(err));
    } 

    useEffect(() => {
        console.log('useEffect')
        getNewPosts()
    }, [])

    return(
        <main
            className={StyleComp.card_area}
        >
            <ul
                className={StyleComp.card_area_wrapper}
            >
                {items.map(elem => {
                    return <CardPrev
                        id={elem.id}
                        title={elem.title}
                        preview={elem.preview || genPreview(elem.body)}
                    />
                })}
            </ul>
        </main>
    )
}