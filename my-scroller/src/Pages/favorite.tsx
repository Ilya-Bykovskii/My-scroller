import React from 'react';

// Components imports:
import Nav from '../components/menu/Menu';
import Header from '../components/header/Header';

// Style:
import './style/comon.css';

export default function Favorite() {
    return (
        <React.Fragment>
            <Nav
                place={'Favorite'}
            />
            <Header/>
        </React.Fragment>
    )
}