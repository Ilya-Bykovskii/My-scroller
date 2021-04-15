import React from 'react';

// Components
import NavLink from './Link';

// styles:
// import StyleComp from './styles/menu.module.css';

export default function Nav() {
    return (
        <nav>
            <ul className="nav">
                <NavLink
                    content={'home'}
                    path={'/'}
                />
                <NavLink
                    content={'Favorite'}
                    path={'/favorite'}
                />
            </ul>
        </nav>
    )
}