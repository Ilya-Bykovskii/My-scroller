import React, {useState, useEffect} from 'react';

// Components: 
import CardPrev from './card-preview/CardPrev';

// hooks:
import genCards from './../../hooks/useGenCards';

// style:
import StyleComp from './style/card-area.module.css';

type Preority = 'item__new' | 'item__light' | 'item__important' | ' ';

interface Post {
    id: number | string;
    title: string;
    preview: string;
    body: string;
    type?: 'animal' | 'video' | 'music' | 'books';
    handler?: Function,
    preority?: Preority,
}

export default function CardArea() {
    const [items, setItems] = useState<Array<Post>>([]);

    async function getNewPosts() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            if (data.ok) return data;
            throw new Error('filed connection with server');
        })
        .then(data => data.json())
        .then(json => {
            json.length = 20;
            setItems(prev => [...prev, ...genCards(json)])
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
                {items.map((elem) => {
                    return <CardPrev
                        id={elem.id}
                        title={elem.title}
                        preview={elem.preview}
                        preority={' '}
                    />
                })}
            </ul>
        </main>
    )
}