import { count } from 'node:console';
import React, {useState} from 'react';

type Preority = 'item__new' | 'item__light' | 'item__important' | ' ';

interface ServerData {
    id: number,
    title: string,
    body: string
}

interface Post extends ServerData{
    preview: string;
    type?: 'animal' | 'video' | 'music' | 'books';
    handler?: Function,
    preority?: Preority,
}


const genPreview = function(body: string): string {
    if (body.length <= 50) return body;
    return body.slice(0, 50) + '...';
}

const genPreority = function(index: number, count: number): [Preority, number] {
    const results: Preority[] = [' ', 'item__new', 'item__light', 'item__important'];
    const num = Math.floor(Math.random() * 10) % count || 0;
    console.log(num)
    return [results[num] || ' ', num + 1];
}

export default function genCards(props: ServerData[]) {
    let counter = 0;
    
    return props.map((elem, index): Post => {
        let [preopity, i] = genPreority(index, 5 - counter % 4);
        let res: Post = {
            id: elem.id,
            title: elem.title,
            body: elem.body,
            preview: ' ',
            preority: preopity,
        };

        counter += i;

        return res;
    })
}