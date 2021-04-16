import React from 'react';

// Components:
import Nav from '../components/menu/Menu';
import SortNav from './../components/sort-nav/SortNav';
import CardArea from './../components/card-area/CardArea';

export default function Home() {
    return (
        <React.Fragment>
            <Nav
                place={'Home'}
            />
            <SortNav/>
            <CardArea/>
        </React.Fragment>
    )
}