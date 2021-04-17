import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// 1. styles
import StyleComp from './style/link-btn.module.css';


type style =  'Home' | 'Favorite';

interface LinkProp {
    content: style;
    path: string;
    icon: React.ReactChild;
}

function NavLink(prop: LinkProp) {

    return (
        <li                 
            className={StyleComp.btn}
        >
            <Link 
                className={StyleComp.link}
                to={prop.path}
            >
                <span
                    className={StyleComp.icon}
                >
                    {prop.icon}
                </span>
                {prop.content}
            </Link>
        </li>
    )
}

export default NavLink; 
