import React from 'react';
import {House, HeartStraight} from 'phosphor-react';

// Components
import NavLink from '../link-btn/Link';

// styles:
import StyleComp from './style/menu.module.css';

function Nav(prop: {place: string}) {
    return (
        <nav  className={StyleComp.menu}>
            <div
                className={StyleComp.logo}
            >
                <img
                    src='https://i.ytimg.com/an/wrWl2UlpKGPPmyPyDEiQEg/featured_channel.jpg?v=602ab935'
                    alt='logo'
                />
            </div>
            
            <ul className={StyleComp.menu__wrapper}>
                <NavLink
                    content={'Home'}
                    path={'/'}
                    className={StyleComp.menu__item}
                    icon={<House size={21}/>}
                />
                <NavLink
                    content={'Favorite'}
                    path={'/favorite'}
                    className={StyleComp.menu__item}
                    icon={<HeartStraight size={21} />}
                />
            </ul>
        </nav>
    )
}

export default Nav;