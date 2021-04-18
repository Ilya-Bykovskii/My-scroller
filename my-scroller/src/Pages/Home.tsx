import React from 'react';

// Components:
import Nav from '../components/menu/Menu';
import SortNav from './../components/sort-nav/SortNav';
import CardArea from './../components/card-area/CardArea';
import Header from './../components/header/Header';

export default function Home() {
    return (
        <React.Fragment>
            <Nav
                place={'Home'}
            />
            <Header/>
            <SortNav/>
            <CardArea/>
        </React.Fragment>
    )
}