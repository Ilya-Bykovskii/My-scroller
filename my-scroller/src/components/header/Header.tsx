import React from 'react';
import {List} from 'phosphor-react';

// Components
import NavLink from '../link-btn/Link';

// styles:
// import StyleComp from './styles/menu.module.css';

function Nav(prop: {place: string}) {
    return (
        <nav>
            <ul>
                <NavLink
                    content={'Home'}
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

export default Nav;