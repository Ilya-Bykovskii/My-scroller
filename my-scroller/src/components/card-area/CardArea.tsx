import React, {useState, useEffect} from 'react';

// namespace:
/// <reference path="./../../namespaces/PostT" />
import { PostT } from "./../../namespaces/PostT";


// Components: 
import CardPrev from './../card-preview/CardPrev';
import Spiner from './Spiner'

// funcs:
import loadCards from './../../functions/loadCards';
import onloadCards from './../../functions/onloadCards';

// style:
import StyleComp from './style/card-area.module.css';

export default function CardArea() {
    const [items, setItems] = useState<Array<PostT.Post>>([]);
    const [unload, setUnload] = useState<boolean>(false);

    useEffect(() => {
        let check = true;
        window.addEventListener('scroll', async () => {
            const [scroll, height] = getScroll();
            if (height - scroll < 500 && check) {
                check = false;
                await loadCards(setItems, setUnload)
                .then(() => check = true);
            }
        })
        loadCards(setItems, setUnload)
    }, [])

    function getScroll(): number[] {
        return [window.scrollY + document.documentElement.clientHeight,   document.body.clientHeight];
    }

    return(
        <main
            className={StyleComp.card_area}
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
                        handler={onloadCards}
                    />
                })}
            </ul>
            {unload ? <Spiner/> : null}
        </main>
    )
}