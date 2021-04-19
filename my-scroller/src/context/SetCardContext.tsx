import React, {useState} from 'react';

interface Post {
    id: number | string;
    title: string;
    preview: string;
    body: string;
    type?: 'animal' | 'video' | 'music' | 'books';
    preority?: 'item__new' | 'item__light' | 'item__important' | ' ', 
}

export default function setCard(): [Post[], Function] {
    const posts: Post[] = [];

    const setPost = function(post: Post) {
        posts.push(post);
    } 

    return [posts, setPost];
}