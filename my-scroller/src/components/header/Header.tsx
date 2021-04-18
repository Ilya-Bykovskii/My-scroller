import React from 'react';

import StyleComp from './style/Header.module.css';

export default function Header() {
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
        </header>
    )
}