import React, {useRef, useState} from 'react';

// Components
import ViewMoreBtn from './Button';

// styles
import StyleComp from './style/card-prev.module.css';
interface PostPreview {
    id: number | string;
    title: string;
    preview: string;
    preority: 'item__new' | 'item__light' | 'item__important' | ' ', 
    handler?: Function,
}

const background = [
    '#001954',
    '#7B92B8',
    '#FA662C',
]

export default function CardPrev(prop: PostPreview) {
    const defoultImg = 'http...';
    const mouseHandler = useRef<HTMLHeadingElement>(null);
    const [hidden, setHidden] = useState<boolean>(true);
    const [backColor] = useState(background[Math.floor(Math.random() * 10) % 3]);

    return (
        <li 
            className={`${StyleComp.item} ${StyleComp[prop.preority!]}`}
            key={prop.id}
        >
            <div
                className={`${StyleComp.item__wrapper} ${hidden ? ' ' : StyleComp.glass_morph}`}
                ref={mouseHandler}
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => setHidden(true)}
                style={{background: backColor}}
            >
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