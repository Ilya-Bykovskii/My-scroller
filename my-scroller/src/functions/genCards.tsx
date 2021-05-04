// namespace:
/// <reference path="../namespaces/PostT.ts" />
import { PostT } from "./../namespaces/PostT";

const genPreview = function(body: string): string {
    if (body.length <= 150) return body;
    return body.slice(0, 150) + '...';
}

const genPreority = function(index: number, count: number): [PostT.Preority, number] {
    const results: PostT.Preority[] = [' ', 'item__new', 'item__light', 'item__important'];
    const num = Math.floor(Math.random() * 10) % count || 0;
    return [results[num] || ' ', num + 1];
}

export default function genCards(props: PostT.ServerData[]) {
    let counter = 0;

    return props.map((elem, index): PostT.Post => {
        let [preopity, i] = genPreority(index, 5 - counter % 4);
        let res: PostT.Post = {
            id: elem.id,
            title: elem.title,
            body: elem.body,
            preview: genPreview(elem.body),
            preority: preopity,
        };

        counter += i;

        return res;
    })
}