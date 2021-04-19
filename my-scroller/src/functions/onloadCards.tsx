import React from 'react';

interface Card {
    id: number | string;
    title: string;
    preview: string;
    body: string;
    type?: 'animal' | 'video' | 'music' | 'books';
}

export default function onloadCards(card: Card) {
    return fetch('https://jsonplaceholder.typicode.com/posts'  , {
        method: 'POST', 
        cache: 'no-cache', 
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(card) // body data type must match "Content-Type" header
    })
}