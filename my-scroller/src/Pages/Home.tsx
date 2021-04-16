import React from 'react';

// Components:
import Nav from '../components/menu/Menu';

export default function Home() {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <Nav
                place={'Home'}
            />
        </React.Fragment>
    )
}