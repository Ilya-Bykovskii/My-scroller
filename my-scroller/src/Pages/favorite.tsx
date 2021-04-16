import React from 'react';

// Components imports:
import Nav from '../components/menu/Menu';

// Style:
import './style/comon.css';

export default function Favorite() {
    return (
        <React.Fragment>
            <h1>Favorite</h1>
            <Nav
                place={'Favorite'}
            />
        </React.Fragment>
    )
}