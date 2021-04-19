import genCards from './genCards';

export default async function loadCards(setter: Function, statusSetter: Function) {
    statusSetter(true);
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        if (data.ok) return data;
        throw new Error('filed connection with server');
    })
    .then(data => data.json())
    .then(json => {
        json.length = 10;
        setter((prev: any) => [...prev, ...genCards(json)]);
    })
    .catch(err => {
        alert('filed connection with server');
        console.error(err)
    })
    .finally(() => statusSetter(false))
}