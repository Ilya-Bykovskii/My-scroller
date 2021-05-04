import React from 'react';

export namespace PostT {
    export type Preority = 'item__new' | 'item__light' | 'item__important' | ' ';

    export interface ServerData {
        id: number | string,
        title: string,
        body: string
    }

    export interface Post extends ServerData {
        preview: string;
        type?: 'animal' | 'video' | 'music' | 'books';
        preority?: Preority,
    }

    export interface PostPreview {
        id: number | string;
        title: string;
        preview: string;
        preority: 'item__new' | 'item__light' | 'item__important' | ' ', 
        handler: Function
    }

    export interface LinkProp {
        icon: React.ReactChild,
        content: string,
    }
}
