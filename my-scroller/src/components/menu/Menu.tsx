import React, {useState} from 'react';
import {House, HeartStraight, X, List} from 'phosphor-react';

// Components
import NavLink from './Link';

// styles:
import StyleComp from './style/menu.module.css';

function Nav(prop: {place: string}) {
    const [visibly, setVisibly] = useState<boolean>(false);
    
    const closeIc = <X 
        size={25}
        className={StyleComp.statusIcon}
        onClick={() => setVisibly(false)}
    />;
    const visualIc = <List 
        className={StyleComp.statusIcon}
        onClick={() => setVisibly(true)}
        size={25}
    />

    return (
        <nav  className={`${StyleComp.menu} ${visibly ? StyleComp.visualy : StyleComp.hidden}`}>
            {visibly ? closeIc : visualIc}
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
                    icon={<House size={21}/>}
                />
                <NavLink
                    content={'Favorite'}
                    path={'/favorite'}
                    icon={<HeartStraight size={21} />}
                />
            </ul>
        </nav>
    )
}

export default Nav;