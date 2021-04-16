import React from 'react';

// Components
import ViewMoreBtn from './Button';

// styles
import StyleComp from './style/card-prev.module.css';
interface PostPreview {
    id: number | string;
    title: string;
    preview: string;
    handler?: Function
}

export default function CardPrev(prop: PostPreview) {
    const defoultImg = 'http...';
    return (
        <li 
            className={StyleComp.item}
            key={prop.id}
        >
            <div
                className={StyleComp.item__wrapper}
            >
                <h3
                    className={StyleComp.item__title}
                >
                    {prop.title}
                </h3>
                <ViewMoreBtn/>
            </div>
        </li>
    )
}