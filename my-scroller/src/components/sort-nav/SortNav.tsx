import React from 'react';
import {VideoCamera, Headphones, PawPrint, BookBookmark} from 'phosphor-react';

// components
import NavLink from './Link';

// Styles:
import StyleComp from './style/sort-nav.module.css';

export default function SortNav() {
    return (
            <nav className={StyleComp.nav}>
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
            </nav>
    )
}