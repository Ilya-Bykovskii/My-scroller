// namespace:
/// <reference path="./../namespaces/PostT.ts" />
import { PostT } from "./../namespaces/PostT";

export default function onloadCards(card: PostT.Post) {
    return fetch('https://jsonplaceholder.typicode.com/posts'  , {
        method: 'POST', 
        cache: 'no-cache', 
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(card),
    })
}