import React from 'react';

// style
import StyleComp from './style/link-btn.module.css';
import BtnComp from './style/sort-nav.module.css'

interface LinkProp {
    icon: React.ReactChild,
    content: string,
}

export default function NavLink(prop: LinkProp) {
    return (
        <li                 
            className={`${StyleComp.btn} ${BtnComp.navItem}`}
        >
            <a 
                className={StyleComp.link}
            >
                <span
                    className={StyleComp.icon}
                >
                    {prop.icon}
                </span>
                {prop.content}
            </a>
        </li>
    )
}