import React from 'react';

// style
import StyleComp from './style/link-btn.module.css';

interface LinkProp {
    icon: React.ReactChild,
    content: string,
}

export default function NavLink(prop: LinkProp) {
    return (
        <li                 
            className={StyleComp.btn}
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