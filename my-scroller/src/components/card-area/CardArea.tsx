import React, {useState, useEffect, useRef} from 'react';

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
    const webElem = useRef<HTMLHeadingElement>(null);

    async function getNewPosts() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            if (data.ok) return data;
            throw new Error('filed connection with server');
        })
        .then(data => {
            let i = 0;
            return data.json();
        })
        .then(json => {
            json.length = 10;
            setItems(prev => [...prev, ...genCards(json)])
        })
        .catch(err => console.log(err));
    } 

    useEffect(() => {
        let check = true;
        window.addEventListener('scroll', async () => {
            const [scroll, height] = getScroll();
            if (height - scroll < 500 && check) {
                check = false;
                await getNewPosts();
                check = true;
            }
        })
        getNewPosts()
    }, [])

    function getScroll(): number[] {
        return [window.scrollY + document.documentElement.clientHeight,   document.body.clientHeight];
    }

    return(
        <main
            className={StyleComp.card_area}
            ref={webElem}
        >
            <ul
                onScroll={() => {
                    console.log('hi')
                }}
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