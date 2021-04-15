import React from 'react';
import { Link } from 'react-router-dom';

// 1. styles
import StyleComp from './styles/menu.module.css';

interface LinkProp {
    content: string;
    path: string;
}

function NavLink(prop: LinkProp) {
    return (
        <li
            className='nav-item'
        >
            <Link 
                to={prop.path} 
                className="nav-link active"
            >
                {prop.content}
            </Link>
        </li>
    )
}

export default NavLink; 
