import React, {useState} from 'react';
import {HeartStraight} from 'phosphor-react';

// functions
import onloadCards from './../../functions/onloadCards';

// styles
import StyleComp from './style/card-prev.module.css';
import { error } from 'node:console';

interface PostPreview {
    id: number | string;
    title: string;
    preview: string;
    preority: 'item__new' | 'item__light' | 'item__important' | ' ', 
    handler: Function
}

const background = [
    '#001954',
    '#7B92B8',
    '#FA662C',
]

export default function CardPrev(prop: PostPreview) {
    const defoultImg = 'http...';
    const [hidden, setHidden] = useState<boolean>(true);
    const [favorite, setFavorite] = useState<boolean>(false);
    const [backColor] = useState(background[Math.floor(Math.random() * 10) % 3]);

    return (
        <li 
            className={`${StyleComp.item} ${StyleComp[prop.preority!]}`}
            key={prop.id}
            style={{background: backColor}}
        >
            <div
                className={`${StyleComp.item__wrapper} ${hidden ? ' ' : StyleComp.glass_morph}`}
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => setHidden(true)}
            >
                <HeartStraight 
                    className={`
                        ${StyleComp.heart_icon} 
                        ${hidden ? 'visually-hidden' : ''} 
                        ${favorite ? StyleComp.liked : ''}
                    `}
                    onClick={() => prop.handler()
                        .then((status: any) => {
                            if (status.ok) throw new Error('filed connection with server')
                            return status;
                        })
                        .then((status: any) => {
                            setFavorite(true);
                            console.log(status)
                        })
                        .catch((err: any) => {
                            console.error(err)
                        })
                        .finally(() => setFavorite(true))
                    }
                    size={38} 
                />
                <h3
                    className={`${StyleComp.item__title} ${!hidden ? 'visually-hidden' : ' '}`}
                >
                    {prop.title}
                </h3>
                <p
                    className={`${StyleComp.item__prev} ${hidden ? 'visually-hidden' : ' '}`}
                >
                    {prop.preview}
                </p>
            </div>
        </li>
    )
}