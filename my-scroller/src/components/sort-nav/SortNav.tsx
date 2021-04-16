import React from 'react';
import {VideoCamera, Headphones, PawPrint, BookBookmark} from 'phosphor-react';

// components
import NavLink from './Link';

// Styles:
import StyleComp from './style/sort-nav.module.css';

export default function SortNav() {
    return (
        <header className={StyleComp.header}>
            <div className={StyleComp.logo__wrapper}>
                <div className={StyleComp.logo}>
                    <img
                        src='https://i.ytimg.com/an/wrWl2UlpKGPPmyPyDEiQEg/featured_channel.jpg?v=602ab935'
                        alt='logo'
                    />
                </div>
            </div>
            <ul className={StyleComp.navWrapper}>
                <NavLink
                    content={'Video'}
                    icon={<VideoCamera size={21}/>}
                />
                <NavLink
                    content={'Music'}
                    icon={<Headphones size={21} />}
                />
                <NavLink
                    content={'Animal'}
                    icon={<PawPrint size={21} />}
                />
                <NavLink
                    content={'Books'}
                    icon={<BookBookmark size={21} />}
                />
            </ul>
        </header>
    )
}